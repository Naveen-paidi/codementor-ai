/**
 * DSA Service Layer
 * Manages catalogue queries, persistence for submissions & progress,
 * GitHub-style heatmap generation, streaks, and sub-10s AI code reviews.
 */

import { v4 as uuidv4 } from 'uuid';
import { dbService } from '../services/db.service.js';
import { supabaseAdmin, isSupabaseAdminConfigured } from '../config/supabase.js';
import {
  getAllDSAProblems,
  getDSAProblemById,
  getDSATopics,
  getDSAManifestSummary
} from './data/dsaCatalogue.js';
import { judgeSubmission } from './harness/dsaJudge.js';
import { generateJSON, isAIConfigured } from '../config/gemini.js';

function getLocalDateString(d = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export class DSAService {
  /**
   * Retrieves all problems annotated with the user's solved/attempted status
   */
  static async getProblems({
    userId = 'guest-learner',
    topic,
    difficulty,
    status,
    search,
    sortBy = 'number',
    sortOrder = 'asc'
  } = {}) {
    const allProblems = getAllDSAProblems({ includePrivate: false });
    const userProgressMap = await this.getUserProgressMap(userId);

    let filtered = allProblems.map(p => {
      const prog = userProgressMap.get(p.id);
      return {
        id: p.id,
        number: p.number,
        title: p.title,
        slug: p.slug,
        topic: p.topic,
        difficulty: p.difficulty,
        constraints: p.constraints,
        totalTestCases: p.totalTestCases,
        publicTestCount: p.publicTestCount,
        status: prog?.status || 'unsolved',
        bestExecutionTime: prog?.best_execution_time ?? null,
        latestAttemptAt: prog?.latest_attempt_at ?? null
      };
    });

    // Topic Filter
    if (topic && topic !== 'all' && topic !== 'All') {
      const normTopic = topic.toLowerCase().trim();
      filtered = filtered.filter(p => p.topic.toLowerCase() === normTopic);
    }

    // Difficulty Filter
    if (difficulty && difficulty !== 'all' && difficulty !== 'All') {
      const normDiff = difficulty.toLowerCase().trim();
      filtered = filtered.filter(p => p.difficulty.toLowerCase() === normDiff);
    }

    // Status Filter (unsolved, attempted, solved)
    if (status && status !== 'all' && status !== 'All') {
      const normStat = status.toLowerCase().trim();
      filtered = filtered.filter(p => p.status.toLowerCase() === normStat);
    }

    // Search Query (title or number)
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        String(p.number) === q ||
        p.id.toLowerCase().includes(q)
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      let valA = a[sortBy] ?? a.number;
      let valB = b[sortBy] ?? b.number;

      if (sortBy === 'difficulty') {
        const diffWeight = { Easy: 1, Medium: 2, Hard: 3 };
        valA = diffWeight[a.difficulty] || 2;
        valB = diffWeight[b.difficulty] || 2;
      }

      if (typeof valA === 'string') {
        return sortOrder === 'desc' ? valB.localeCompare(valA) : valA.localeCompare(valB);
      }
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

    return filtered;
  }

  /**
   * Retrieves single problem details with starter code and public tests
   */
  static async getProblemDetails(problemId, userId = 'guest-learner') {
    const prob = getDSAProblemById(problemId, { includePrivate: false });
    if (!prob) return null;

    const userProgressMap = await this.getUserProgressMap(userId);
    const prog = userProgressMap.get(prob.id);

    const submissions = await this.getUserSubmissionsForProblem(userId, prob.id);

    return {
      ...prob,
      status: prog?.status || 'unsolved',
      bestExecutionTime: prog?.best_execution_time ?? null,
      submissions
    };
  }

  /**
   * Returns topic-wise breakdown and statistics reconciled against 200 manifest
   */
  static async getTopicProgress(userId = 'guest-learner') {
    const topics = getDSATopics();
    const userProgressMap = await this.getUserProgressMap(userId);

    return topics.map(t => {
      let solvedCount = 0;
      let attemptedCount = 0;

      t.problemIds.forEach(id => {
        const p = userProgressMap.get(id);
        if (p?.status === 'solved') solvedCount++;
        else if (p?.status === 'attempted') attemptedCount++;
      });

      const remaining = t.totalProblems - solvedCount;
      const percentage = t.totalProblems > 0 ? Math.round((solvedCount / t.totalProblems) * 100) : 0;

      return {
        topic: t.name,
        totalProblems: t.totalProblems,
        solved: solvedCount,
        attempted: attemptedCount,
        remaining,
        percentage,
        difficultyBreakdown: {
          easy: t.easy,
          medium: t.medium,
          hard: t.hard
        }
      };
    });
  }

  /**
   * Returns user overall stats: streak, acceptance rate, difficulty counts
   */
  static async getUserStats(userId = 'guest-learner') {
    const summary = getDSAManifestSummary();
    const userProgressMap = await this.getUserProgressMap(userId);
    const allProblems = getAllDSAProblems({ includePrivate: false });

    let solvedTotal = 0;
    let attemptedTotal = 0;
    let solvedEasy = 0;
    let solvedMedium = 0;
    let solvedHard = 0;

    allProblems.forEach(p => {
      const prog = userProgressMap.get(p.id);
      if (prog?.status === 'solved') {
        solvedTotal++;
        if (p.difficulty === 'Easy') solvedEasy++;
        else if (p.difficulty === 'Medium') solvedMedium++;
        else if (p.difficulty === 'Hard') solvedHard++;
      } else if (prog?.status === 'attempted') {
        attemptedTotal++;
      }
    });

    // Submissions metrics for acceptance rate
    const submissions = await this.getAllUserSubmissions(userId);
    const totalSubmissions = submissions.length;
    const acceptedSubmissions = submissions.filter(s => s.status === 'Accepted').length;
    const acceptanceRate = totalSubmissions > 0
      ? Math.round((acceptedSubmissions / totalSubmissions) * 1000) / 10
      : 0;

    // Streaks calculation from activity & centralized gamification
    const gamification = dbService.getUserGamification(userId);
    const activityList = await this.getUserActivity(userId);
    const { currentStreak, longestStreak } = this.calculateStreaks(activityList);

    const effectiveCurrentStreak = gamification?.currentStreak !== undefined ? gamification.currentStreak : currentStreak;
    const effectiveLongestStreak = Math.max(gamification?.longestStreak || 0, longestStreak);
    const effectiveActiveDays = Math.max(
      gamification?.totalActiveDays || 0,
      activityList.filter(a => a.solved_count > 0 || a.submission_count > 0).length
    );

    return {
      totalProblems: summary.totalProblems, // Exactly 200
      solved: solvedTotal,
      attempted: attemptedTotal,
      remaining: summary.totalProblems - solvedTotal,
      completionPercentage: Math.round((solvedTotal / summary.totalProblems) * 100),
      difficulty: {
        easy: { solved: solvedEasy, total: summary.easy },
        medium: { solved: solvedMedium, total: summary.medium },
        hard: { solved: solvedHard, total: summary.hard }
      },
      currentStreak: effectiveCurrentStreak,
      longestStreak: effectiveLongestStreak,
      totalSubmissions,
      acceptedSubmissions,
      acceptanceRate,
      activeDays: effectiveActiveDays
    };
  }

  /**
   * Generates GitHub-style 365-day contribution heatmap grid
   */
  static async getHeatmap(userId = 'guest-learner') {
    const activityList = await this.getUserActivity(userId);
    const activityMap = new Map();
    activityList.forEach(a => activityMap.set(a.activity_date, a));

    // Construct exactly 365 days leading up to today
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = getLocalDateString(d);
      const act = activityMap.get(dateStr);
      const count = act ? (act.solved_count || act.submission_count || 0) : 0;

      let level = 0;
      if (count >= 7) level = 4;
      else if (count >= 5) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1) level = 1;

      days.push({
        date: dateStr,
        dayOfWeek: d.getDay(), // 0 = Sun, 6 = Sat
        count,
        solvedCount: act?.solved_count || 0,
        submissionCount: act?.submission_count || 0,
        level,
        problems: act?.problems || []
      });
    }

    return {
      totalDays: days.length,
      days,
      currentYear: today.getFullYear()
    };
  }

  /**
   * Returns details for a specific clicked day on the heatmap
   */
  static async getDayDetails(userId, dateStr) {
    const activityList = await this.getUserActivity(userId);
    const act = activityList.find(a => a.activity_date === dateStr);
    const submissions = (await this.getAllUserSubmissions(userId))
      .filter(s => {
        const subDate = (s.created_at || '').substring(0, 10);
        return subDate === dateStr;
      });

    return {
      date: dateStr,
      solvedCount: act?.solved_count || 0,
      submissionCount: submissions.length,
      submissions: submissions.map(s => ({
        id: s.id,
        problemId: s.problem_id,
        language: s.language,
        status: s.status,
        executionTime: s.execution_time,
        createdAt: s.created_at
      }))
    };
  }

  /**
   * Run user code against 3 public test cases
   */
  static async runCode({ problemId, language, code }) {
    const problem = getDSAProblemById(problemId, { includePrivate: true });
    if (!problem) throw new Error(`Problem ${problemId} not found`);

    return await judgeSubmission({
      problem,
      language,
      userCode: code,
      mode: 'run'
    });
  }

  /**
   * Submit user code against all 10 test cases, persist submission & update progress
   */
  static async submitCode({ userId = 'guest-learner', problemId, language, code }) {
    const problem = getDSAProblemById(problemId, { includePrivate: true });
    if (!problem) throw new Error(`Problem ${problemId} not found`);

    // Deterministic Judge execution
    const judgeResult = await judgeSubmission({
      problem,
      language,
      userCode: code,
      mode: 'submit'
    });

    const isAccepted = judgeResult.status === 'Accepted';
    const submissionId = uuidv4();
    const now = new Date().toISOString();
    const todayStr = getLocalDateString();

    const submissionRecord = {
      id: submissionId,
      user_id: userId,
      problem_id: problem.id,
      language,
      code,
      status: judgeResult.status,
      passed_count: judgeResult.passedCount,
      total_count: judgeResult.totalCount,
      execution_time: judgeResult.executionTime,
      error_summary: judgeResult.error || null,
      created_at: now
    };

    // Save submission record
    await this.saveSubmission(submissionRecord);

    // Update DSA Progress
    const userProgressMap = await this.getUserProgressMap(userId);
    const existingProg = userProgressMap.get(problem.id);
    const wasAlreadySolved = existingProg?.status === 'solved';

    let newStatus = wasAlreadySolved ? 'solved' : (isAccepted ? 'solved' : 'attempted');
    let firstAcceptedAt = existingProg?.first_accepted_at || (isAccepted ? now : null);
    let bestExecTime = existingProg?.best_execution_time;
    if (isAccepted) {
      if (bestExecTime === undefined || bestExecTime === null || judgeResult.executionTime < bestExecTime) {
        bestExecTime = judgeResult.executionTime;
      }
    }

    const updatedProg = {
      user_id: userId,
      problem_id: problem.id,
      status: newStatus,
      first_accepted_at: firstAcceptedAt,
      latest_attempt_at: now,
      best_submission_id: isAccepted ? submissionId : (existingProg?.best_submission_id || null),
      best_execution_time: bestExecTime,
      updated_at: now
    };

    await this.saveProgress(updatedProg);

    // Update Activity Heatmap
    // Only increment solved_count if solved for the first time!
    const isFirstTimeSolve = isAccepted && !wasAlreadySolved;
    await this.recordActivity({
      userId,
      date: todayStr,
      isSolve: isFirstTimeSolve,
      problemTitle: problem.title
    });

    // Centralized Gamification: Award XP and update streak on accepted solve
    let xpAwardInfo = null;
    let streakResult = null;
    if (isAccepted) {
      const difficultyXP = problem.difficulty === 'Hard' ? 5 : (problem.difficulty === 'Medium' ? 3 : 2);
      xpAwardInfo = dbService.awardXP({
        userId,
        amount: difficultyXP,
        reason: `Solved DSA Problem (${problem.difficulty}): ${problem.title}`,
        activityType: 'dsa_problem',
        activityId: problem.id
      });
      streakResult = dbService.recordDailyActivity({
        userId,
        activityType: 'dsa_problem',
        activityId: problem.id,
        metadata: { title: problem.title, difficulty: problem.difficulty }
      });
    }

    const currentProfile = dbService.getProfile(userId);
    const userStreak = streakResult?.currentStreak ?? currentProfile?.streak_days ?? 0;

    return {
      submissionId,
      ...judgeResult,
      isFirstTimeSolve,
      problemId: problem.id,
      problemTitle: problem.title,
      xpAwarded: xpAwardInfo?.awarded || false,
      currentXP: xpAwardInfo?.currentXP || currentProfile?.xp || 0,
      streak: userStreak,
      streakDays: userStreak
    };
  }

  /**
   * AI-powered Code Review with sub-10 second latency target
   */
  static async getAIReview({ problemId, language, code, errorSummary, status }) {
    const startTime = Date.now();
    const problem = getDSAProblemById(problemId, { includePrivate: false });
    if (!problem) throw new Error('Problem not found');

    const isAvailable = isAIConfigured();

    if (!isAvailable) {
      // Instant heuristic analysis fallback
      return this.generateHeuristicReview(problem, language, code, status, errorSummary, startTime);
    }

    const prompt = `You are an elite competitive programming and algorithms mentor.
Analyze the following student solution for the DSA problem.

Problem: "${problem.title}" (${problem.difficulty})
Topic: ${problem.topic}
Problem Description Summary: ${problem.description.substring(0, 300)}...
Constraints: ${problem.constraints.join('; ')}
Language: ${language}
Deterministic Judge Status: ${status}
${errorSummary ? `Judge Error Summary: ${errorSummary}` : ''}

Student's Submitted Code:
\`\`\`${language}
${code}
\`\`\`

Provide a high-quality, concise code review as a valid JSON object matching this schema exactly:
{
  "approachExplanation": "1-2 concise sentences explaining the student's algorithmic approach.",
  "timeComplexity": "Big-O notation with concise explanation of dominant operations (e.g. O(n) - Single pass through the array)",
  "spaceComplexity": "Big-O notation with explanation of auxiliary memory used (e.g. O(1) - Constant additional memory)",
  "codeQuality": ["Constructive point on code structure or readability", "Best practice or edge-case handling note"],
  "optimizations": "A concise actionable recommendation to optimize time/space or confirm that the approach is already optimal.",
  "keyLearning": "The core DSA pattern or takeaway for this problem (e.g. Two-pointer technique, Monotonic stack, etc.)"
}
Respond strictly with the JSON object.`;

    try {
      const response = await generateJSON(prompt, {
        model: 'google/gemini-2.5-flash',
        maxTokens: 400,
        timeoutMs: 8500, // Budget within 10s target
        temperature: 0.1
      });

      const totalLatencyMs = Date.now() - startTime;

      if (response && response.approachExplanation) {
        return {
          ...response,
          latencyMs: totalLatencyMs,
          status: 'success',
          provider: 'ai-mentor'
        };
      }
      throw new Error('AI produced empty review payload');
    } catch (err) {
      console.warn('[DSAService] AI Review timed out or failed, falling back to heuristic review:', err.message);
      return this.generateHeuristicReview(problem, language, code, status, errorSummary, startTime);
    }
  }

  /**
   * Instant Heuristic Review Fallback (< 20ms)
   */
  static generateHeuristicReview(problem, language, code, status, errorSummary, startTime) {
    const latencyMs = Date.now() - startTime;
    const isAccepted = status === 'Accepted';

    return {
      approachExplanation: isAccepted
        ? `The solution implements an algorithmic approach tailored for "${problem.title}", successfully passing all deterministic public and private test cases.`
        : `The solution encountered issues during testing (${status}). Check edge conditions, index bounds, and parameter handling.`,
      timeComplexity: problem.difficulty === 'Easy' ? 'O(n) - Expected linear time complexity' : 'O(n log n) or O(n) - Target optimal complexity',
      spaceComplexity: 'O(1) to O(n) - Auxiliary memory for data structures and traversal',
      codeQuality: [
        `Code adheres to the LeetCode-style function interface for ${language}.`,
        isAccepted ? 'Clean algorithm without unnecessary auxiliary allocations.' : 'Review condition boundaries and base cases.'
      ],
      optimizations: isAccepted
        ? 'The current solution satisfies all test constraints and time limits. Consider analyzing if in-place space optimization is possible.'
        : `Debug the current logic against the sample test cases before submitting. ${errorSummary ? `Note: ${errorSummary}` : ''}`,
      keyLearning: `Core topic: ${problem.topic}. Focus on pattern recognition and boundary condition testing.`,
      latencyMs,
      status: 'success',
      provider: 'heuristic-fast-path'
    };
  }

  // --------------------------------------------------------------------------
  // Persistence Helpers (Dual Storage: storage.json & Supabase)
  // --------------------------------------------------------------------------

  static async getUserProgressMap(userId) {
    const map = new Map();
    dbService.syncFromDisk();
    const local = (dbService.data.dsa_progress || []).filter(p => p.user_id === userId);
    local.forEach(p => map.set(p.problem_id, p));

    if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
      try {
        const { data, error } = await supabaseAdmin
          .from('dsa_progress')
          .select('*')
          .eq('user_id', userId);
        if (!error && Array.isArray(data)) {
          data.forEach(p => map.set(p.problem_id, p));
        }
      } catch (_) {}
    }
    return map;
  }

  static async saveProgress(progressRecord) {
    dbService.syncFromDisk();
    if (!dbService.data.dsa_progress) dbService.data.dsa_progress = [];
    const idx = dbService.data.dsa_progress.findIndex(
      p => p.user_id === progressRecord.user_id && p.problem_id === progressRecord.problem_id
    );
    if (idx >= 0) {
      dbService.data.dsa_progress[idx] = { ...dbService.data.dsa_progress[idx], ...progressRecord };
    } else {
      dbService.data.dsa_progress.push(progressRecord);
    }
    dbService.save();

    if (isSupabaseAdminConfigured() && progressRecord.user_id !== 'guest-learner') {
      try {
        await supabaseAdmin
          .from('dsa_progress')
          .upsert(progressRecord, { onConflict: 'user_id,problem_id' });
      } catch (_) {}
    }
  }

  static async saveSubmission(subRecord) {
    dbService.syncFromDisk();
    if (!dbService.data.dsa_submissions) dbService.data.dsa_submissions = [];
    dbService.data.dsa_submissions.unshift(subRecord);
    dbService.save();

    if (isSupabaseAdminConfigured() && subRecord.user_id !== 'guest-learner') {
      try {
        await supabaseAdmin.from('dsa_submissions').insert(subRecord);
      } catch (_) {}
    }
  }

  static async getAllUserSubmissions(userId) {
    dbService.syncFromDisk();
    let subs = (dbService.data.dsa_submissions || []).filter(s => s.user_id === userId);

    if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
      try {
        const { data } = await supabaseAdmin
          .from('dsa_submissions')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });
        if (Array.isArray(data)) subs = data;
      } catch (_) {}
    }
    return subs;
  }

  static async getUserSubmissionsForProblem(userId, problemId) {
    const all = await this.getAllUserSubmissions(userId);
    return all.filter(s => s.problem_id === problemId);
  }

  static async getUserActivity(userId) {
    dbService.syncFromDisk();
    let acts = (dbService.data.dsa_activity || []).filter(a => a.user_id === userId);

    if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
      try {
        const { data } = await supabaseAdmin
          .from('dsa_activity')
          .select('*')
          .eq('user_id', userId)
          .order('activity_date', { ascending: true });
        if (Array.isArray(data)) acts = data;
      } catch (_) {}
    }
    return acts;
  }

  static async recordActivity({ userId, date, isSolve, problemTitle }) {
    dbService.syncFromDisk();
    if (!dbService.data.dsa_activity) dbService.data.dsa_activity = [];

    let act = dbService.data.dsa_activity.find(
      a => a.user_id === userId && a.activity_date === date
    );

    if (!act) {
      act = {
        id: uuidv4(),
        user_id: userId,
        activity_date: date,
        solved_count: 0,
        submission_count: 0,
        problems: []
      };
      dbService.data.dsa_activity.push(act);
    }

    act.submission_count = (act.submission_count || 0) + 1;
    if (isSolve) {
      act.solved_count = (act.solved_count || 0) + 1;
      if (problemTitle && !act.problems.includes(problemTitle)) {
        act.problems.push(problemTitle);
      }
    }
    act.updated_at = new Date().toISOString();
    dbService.save();

    if (isSupabaseAdminConfigured() && userId !== 'guest-learner') {
      try {
        await supabaseAdmin
          .from('dsa_activity')
          .upsert({
            user_id: userId,
            activity_date: date,
            solved_count: act.solved_count,
            submission_count: act.submission_count
          }, { onConflict: 'user_id,activity_date' });
      } catch (_) {}
    }
  }

  static calculateStreaks(activityList) {
    if (!activityList || !activityList.length) {
      return { currentStreak: 0, longestStreak: 0 };
    }

    const activeDates = new Set(
      activityList
        .filter(a => (a.solved_count > 0 || a.submission_count > 0))
        .map(a => a.activity_date)
    );

    if (activeDates.size === 0) {
      return { currentStreak: 0, longestStreak: 0 };
    }

    const sortedDates = Array.from(activeDates).sort();

    // Longest streak
    let maxStreak = 1;
    let tempStreak = 1;

    for (let i = 1; i < sortedDates.length; i++) {
      const prev = new Date(sortedDates[i - 1]);
      const curr = new Date(sortedDates[i]);
      const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        tempStreak++;
        if (tempStreak > maxStreak) maxStreak = tempStreak;
      } else {
        tempStreak = 1;
      }
    }

    // Current streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = getLocalDateString(today);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yestStr = getLocalDateString(yesterday);

    let curStreak = 0;
    let checkDate = null;

    if (activeDates.has(todayStr)) {
      curStreak = 1;
      checkDate = new Date(today);
    } else if (activeDates.has(yestStr)) {
      curStreak = 1;
      checkDate = new Date(yesterday);
    }

    if (checkDate) {
      while (true) {
        checkDate.setDate(checkDate.getDate() - 1);
        const prevStr = getLocalDateString(checkDate);
        if (activeDates.has(prevStr)) {
          curStreak++;
        } else {
          break;
        }
      }
    }

    return {
      currentStreak: curStreak,
      longestStreak: Math.max(maxStreak, curStreak)
    };
  }
}

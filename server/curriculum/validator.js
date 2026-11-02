/**
 * Curriculum Integrity Validator
 * Validates canonical course structure on startup:
 * - Duplicate IDs and slugs
 * - Missing required fields (titles, descriptions, slugs)
 * - Empty modules or topics arrays
 * - Invalid difficulty tiers
 */

export function validateCurriculum(courses) {
  const seenIds = new Set();
  const seenSlugs = new Set();
  const validDifficulties = new Set(['beginner', 'intermediate', 'advanced']);

  for (const [langKey, course] of Object.entries(courses)) {
    if (!course.id) {
      throw new Error(`[Curriculum Error] Course in '${langKey}' is missing an 'id'.`);
    }
    if (!course.title) {
      throw new Error(`[Curriculum Error] Course '${course.id}' is missing a 'title'.`);
    }
    if (seenIds.has(course.id)) {
      throw new Error(`[Curriculum Error] Duplicate course ID: '${course.id}'.`);
    }
    seenIds.add(course.id);

    if (!Array.isArray(course.levels) || course.levels.length === 0) {
      throw new Error(`[Curriculum Error] Course '${course.id}' has no levels defined.`);
    }

    for (const level of course.levels) {
      if (!level.id) {
        throw new Error(`[Curriculum Error] Level in course '${course.id}' is missing an 'id'.`);
      }
      if (seenIds.has(level.id)) {
        throw new Error(`[Curriculum Error] Duplicate level ID: '${level.id}'.`);
      }
      seenIds.add(level.id);

      if (!Array.isArray(level.modules) || level.modules.length === 0) {
        throw new Error(`[Curriculum Error] Level '${level.id}' has an empty or missing 'modules' array.`);
      }

      for (const module of level.modules) {
        if (!module.id) {
          throw new Error(`[Curriculum Error] Module in level '${level.id}' is missing an 'id'.`);
        }
        if (seenIds.has(module.id)) {
          throw new Error(`[Curriculum Error] Duplicate module ID: '${module.id}'.`);
        }
        seenIds.add(module.id);

        if (!module.title) {
          throw new Error(`[Curriculum Error] Module '${module.id}' is missing a 'title'.`);
        }

        // Support direct topics array or sections with subtopics
        const topicsToValidate = [];
        if (Array.isArray(module.topics) && module.topics.length > 0) {
          topicsToValidate.push(...module.topics);
          // If sections are also present, verify they reference valid topics
          if (Array.isArray(module.sections)) {
            const moduleTopicIds = new Set(module.topics.map(t => t.id));
            for (const section of module.sections) {
              if (Array.isArray(section.topics)) {
                for (const st of section.topics) {
                  if (!st.id || !moduleTopicIds.has(st.id)) {
                    throw new Error(`[Curriculum Error] Section '${section.id}' in module '${module.id}' references unknown topic ID '${st.id}'.`);
                  }
                }
              }
            }
          }
        } else if (Array.isArray(module.sections)) {
          for (const section of module.sections) {
            if (Array.isArray(section.topics)) {
              topicsToValidate.push(...section.topics);
            }
          }
        }

        if (topicsToValidate.length === 0) {
          throw new Error(`[Curriculum Error] Module '${module.id}' has no topics or sections defined.`);
        }

        for (const topic of topicsToValidate) {
          if (!topic.id) {
            throw new Error(`[Curriculum Error] Topic in module '${module.id}' is missing an 'id'.`);
          }
          if (seenIds.has(topic.id)) {
            throw new Error(`[Curriculum Error] Duplicate topic ID: '${topic.id}'.`);
          }
          seenIds.add(topic.id);

          if (!topic.title) {
            throw new Error(`[Curriculum Error] Topic '${topic.id}' is missing a 'title'.`);
          }
          if (!topic.slug) {
            throw new Error(`[Curriculum Error] Topic '${topic.id}' is missing a 'slug'.`);
          }

          const scopedSlug = `${course.id}/${topic.slug}`;
          if (seenSlugs.has(scopedSlug)) {
            throw new Error(`[Curriculum Error] Duplicate topic slug: '${scopedSlug}'.`);
          }
          seenSlugs.add(scopedSlug);

          if (topic.difficulty && !validDifficulties.has(topic.difficulty)) {
            throw new Error(`[Curriculum Error] Topic '${topic.id}' has invalid difficulty '${topic.difficulty}'.`);
          }
        }
      }
    }
  }

  return {
    valid: true,
    totalCourses: Object.keys(courses).length,
    totalUniqueEntities: seenIds.size
  };
}

export function validateCodingProblems(problems) {
  if (!Array.isArray(problems)) return;

  const seenProblemIds = new Set();

  for (const problem of problems) {
    if (!problem.id) {
      throw new Error('[Curriculum Validation Error] Coding problem is missing an "id".');
    }
    if (seenProblemIds.has(problem.id)) {
      throw new Error(`[Curriculum Validation Error] Duplicate problem ID: '${problem.id}'.`);
    }
    seenProblemIds.add(problem.id);

    if (!problem.title || !problem.problemStatement) {
      throw new Error(`[Curriculum Validation Error] Problem '${problem.id}' missing title or problemStatement.`);
    }

    if (!Array.isArray(problem.testCases) || problem.testCases.length !== 10) {
      throw new Error(`[Curriculum Validation Error] Problem: ${problem.id} Expected: 10 test cases Found: ${problem.testCases ? problem.testCases.length : 0}`);
    }

    const publicCount = problem.testCases.filter(tc => !tc.isHidden).length;
    const hiddenCount = problem.testCases.filter(tc => tc.isHidden).length;

    if (publicCount !== 3) {
      throw new Error(`[Curriculum Validation Error] Problem: ${problem.id} Expected: 3 public test cases Found: ${publicCount}`);
    }
    if (hiddenCount !== 7) {
      throw new Error(`[Curriculum Validation Error] Problem: ${problem.id} Expected: 7 hidden test cases Found: ${hiddenCount}`);
    }

    for (const tc of problem.testCases) {
      if (!tc.id) {
        throw new Error(`[Curriculum Validation Error] Test case in problem '${problem.id}' is missing an ID.`);
      }
      if (tc.input === undefined || tc.expectedOutput === undefined) {
        throw new Error(`[Curriculum Validation Error] Test case '${tc.id}' missing input or expectedOutput.`);
      }
    }
  }

  return { valid: true, totalProblems: problems.length };
}

export default validateCurriculum;

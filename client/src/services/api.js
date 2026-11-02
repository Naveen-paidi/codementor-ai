/**
 * Centralized API Client for Backend Services
 */

const getAuthHeaders = () => {
  const token = localStorage.getItem('supabase_auth_token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const api = {
  // Languages & Courses
  async getLanguages() {
    const res = await fetch('/api/languages');
    return res.json();
  },

  async getCourse(language) {
    const res = await fetch(`/api/courses/${language}`);
    return res.json();
  },

  async getTopic(topicId) {
    const res = await fetch(`/api/courses/topics/${topicId}`);
    return res.json();
  },

  async getLesson(lessonId, language = '', forceRegenerate = false) {
    const params = new URLSearchParams();
    if (language) params.append('language', language);
    if (forceRegenerate) params.append('regenerate', 'true');
    const qs = params.toString() ? `?${params.toString()}` : '';
    const res = await fetch(`/api/lessons/${lessonId}${qs}`);
    return res.json();
  },

  // Practice & Coding Challenges
  async getQuestions(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`/api/practice${query ? `?${query}` : ''}`);
    return res.json();
  },

  async getPracticeHierarchy(language = 'python') {
    const res = await fetch(`/api/practice/hierarchy?language=${encodeURIComponent(language)}`);
    return res.json();
  },

  async getQuestionById(id, language = '') {
    const qs = language ? `?language=${encodeURIComponent(language)}` : '';
    const res = await fetch(`/api/practice/${id}${qs}`);
    return res.json();
  },

  async runSampleTests(questionId, language, code) {
    const res = await fetch('/api/practice/run', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ questionId, language, code })
    });
    return res.json();
  },

  async generateAIQuestion(data) {
    const res = await fetch('/api/practice/generate', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  // Execution & Submissions
  async executeCode(language, code, stdin = '') {
    const res = await fetch('/api/execute', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ language, code, stdin })
    });
    return res.json();
  },

  async submitSolution(questionId, language, code, attemptNumber = 1) {
    const res = await fetch('/api/practice/submit', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ questionId, language, code, attemptNumber })
    });
    return res.json();
  },

  // AI Services
  async explainConcept(topicTitle, language, query = '') {
    const res = await fetch('/api/ai/explain', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ topicTitle, language, query })
    });
    return res.json();
  },

  async requestCodeReview(data) {
    const res = await fetch('/api/ai/review', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async askProblemDoubt(data) {
    const res = await fetch('/api/ai/problem-doubt', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async askMentorRAG(message, context = {}) {
    const sessionId = context?.sessionId || 'local-session';
    const history = context?.history || [];
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ message, context, sessionId, history })
    });
    return res.json();
  },

  async sendChatMessage(message, context = {}, sessionId = 'local-session', history = []) {
    return this.askMentorRAG(message, { ...context, sessionId, history });
  },

  // RAG & Knowledge Base Management
  async getRagDocuments() {
    const res = await fetch('/api/rag/documents', { headers: getAuthHeaders() });
    return res.json();
  },

  async ingestRagDocument(data) {
    const res = await fetch('/api/rag/ingest', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async deleteRagDocument(id) {
    const res = await fetch(`/api/rag/documents/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async reindexRag() {
    const res = await fetch('/api/rag/reindex', {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async syncCurriculumRag() {
    const res = await fetch('/api/rag/sync-curriculum', {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getStudentAnalytics() {
    const res = await fetch('/api/student/analytics', { headers: getAuthHeaders() });
    return res.json();
  },

  async getAdminAnalytics() {
    const res = await fetch('/api/admin/analytics', { headers: getAuthHeaders() });
    return res.json();
  },

  // Progress & Telemetry
  async getProgress(language = 'python') {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return { success: false, status: 401, error: 'Authentication required' };
    const res = await fetch(`/api/progress?language=${encodeURIComponent(language)}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getRecommendations(language = 'python') {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return { success: false, status: 401, recommendations: [] };
    const res = await fetch(`/api/progress/recommendations?language=${encodeURIComponent(language)}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getProfile() {
    const res = await fetch('/api/auth/profile', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Auth Operations
  async register(email, password, fullName) {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, fullName })
    });
    return res.json();
  },

  async login(email, password) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  },

  async logout() {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // College Directory & Memberships
  async getColleges(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/colleges${qs ? `?${qs}` : ''}`);
    return res.json();
  },

  async getCollege(collegeId) {
    const res = await fetch(`/api/colleges/${collegeId}`);
    return res.json();
  },

  async submitJoinRequest(collegeId) {
    const res = await fetch(`/api/colleges/${collegeId}/join`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getMyJoinRequests() {
    const res = await fetch('/api/colleges/requests/my', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async withdrawJoinRequest(requestId) {
    const res = await fetch(`/api/colleges/requests/${requestId}/withdraw`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async reviewJoinRequest(requestId, action, rejectionReason = '') {
    const res = await fetch(`/api/colleges/requests/${requestId}/review`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ action, rejectionReason })
    });
    return res.json();
  },

  // Student LMS
  async getStudentDashboard() {
    const res = await fetch('/api/students/dashboard', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async enrollCourse(courseId, collegeId = null) {
    const res = await fetch('/api/students/enroll', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ courseId, collegeId })
    });
    return res.json();
  },

  async getMyEnrollments() {
    const res = await fetch('/api/students/enrollments', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async completeTopic(courseId, topicId, status = 'completed') {
    const res = await fetch('/api/students/complete-topic', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ courseId, topicId, status })
    });
    return res.json();
  },

  async getTopicStatus(courseId, topicId) {
    const res = await fetch(`/api/students/topic-status/${courseId}/${topicId}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getCourseCompletedTopics(courseId) {
    const res = await fetch(`/api/students/courses/${encodeURIComponent(courseId)}/completed-topics`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Certificates API
  async getMyCertificates() {
    const res = await fetch('/api/certificates/my-certificates', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async claimCertificate(courseId) {
    const res = await fetch(`/api/certificates/claim/${courseId}`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async verifyCertificate(certificateId) {
    const res = await fetch(`/api/certificates/verify/${certificateId}`);
    return res.json();
  },

  // Faculty LMS
  async getFacultyDashboard() {
    const res = await fetch('/api/faculty/dashboard', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getFacultyStudents() {
    const res = await fetch('/api/faculty/students', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getFacultyStudentDetails(studentId) {
    const res = await fetch(`/api/faculty/students/${studentId}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // College Admin LMS
  async getCollegeAdminDashboard() {
    const res = await fetch('/api/college-admin/dashboard', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getCollegeStudents(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/college-admin/students${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async deactivateStudentMembership(studentId) {
    const res = await fetch(`/api/college-admin/students/${studentId}/deactivate`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getCollegeFaculty() {
    const res = await fetch('/api/college-admin/faculty', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async promoteFaculty(data) {
    const res = await fetch('/api/college-admin/faculty/promote', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async removeFaculty(facultyId) {
    const res = await fetch(`/api/college-admin/faculty/${facultyId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async assignStudentToFaculty(data) {
    const res = await fetch('/api/college-admin/faculty/assign', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async getCollegeCourses() {
    const res = await fetch('/api/college-admin/courses', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async updateCollegeCourse(courseId, data) {
    const res = await fetch(`/api/college-admin/courses/${courseId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  // Messaging
  async getUnreadMessageCount() {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return { success: false, unreadCount: 0 };
    const res = await fetch('/api/messages/unread-count', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getConversations() {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return { success: false, status: 401, conversations: [] };
    const res = await fetch('/api/messages/conversations', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getMessages(conversationId) {
    const token = localStorage.getItem('supabase_auth_token');
    if (!token) return { success: false, status: 401, messages: [] };
    const res = await fetch(`/api/messages/conversations/${conversationId}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async sendMessage(receiverId, content) {
    const res = await fetch('/api/messages/send', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ receiverId, content })
    });
    return res.json();
  },

  async getMessagingContacts() {
    const res = await fetch('/api/messages/contacts', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // Super Admin LMS
  async getSuperAdminDashboard() {
    const res = await fetch('/api/super-admin/dashboard', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getSuperAdminColleges(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/super-admin/colleges${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async createCollege(data) {
    const res = await fetch('/api/super-admin/colleges', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async updateCollege(collegeId, data) {
    const res = await fetch(`/api/super-admin/colleges/${collegeId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async getCollegeAdmin(collegeId) {
    const res = await fetch(`/api/super-admin/colleges/${collegeId}/admin`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // College Admin Invitations (Super Admin)
  async inviteCollegeAdmin(data) {
    const res = await fetch('/api/super-admin/college-admin-invitations', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    });
    return res.json();
  },

  async getSuperAdminInvitations(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/super-admin/college-admin-invitations${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async cancelCollegeAdminInvitation(invitationId) {
    const res = await fetch(`/api/super-admin/college-admin-invitations/${invitationId}/cancel`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // User-facing College Admin Invitations
  async getMyCollegeAdminInvitations() {
    const res = await fetch('/api/college-admin-invitations/my', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async acceptCollegeAdminInvitation(invitationId) {
    const res = await fetch(`/api/college-admin-invitations/${invitationId}/accept`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async rejectCollegeAdminInvitation(invitationId) {
    const res = await fetch(`/api/college-admin-invitations/${invitationId}/reject`, {
      method: 'POST',
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getUsers(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/super-admin/users${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async updateUserRole(userId, role, collegeId = null) {
    const res = await fetch(`/api/super-admin/users/${userId}/role`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ role, collegeId })
    });
    return res.json();
  },

  async getAuditLogs(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/super-admin/audit-logs${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  // -------------------------------------------------------------
  // DSA Practice Module Endpoints
  // -------------------------------------------------------------
  async getDSAProblems(params = {}) {
    const qs = new URLSearchParams(params).toString();
    const res = await fetch(`/api/dsa/problems${qs ? `?${qs}` : ''}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSAProblemById(problemId) {
    const res = await fetch(`/api/dsa/problems/${encodeURIComponent(problemId)}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSATopics() {
    const res = await fetch('/api/dsa/topics', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSAStats() {
    const res = await fetch('/api/dsa/stats', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSAHeatmap() {
    const res = await fetch('/api/dsa/progress/heatmap', {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSADayDetails(date) {
    const res = await fetch(`/api/dsa/progress/day/${encodeURIComponent(date)}`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async runDSACode({ problemId, language, code }) {
    const res = await fetch('/api/dsa/run', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ problemId, language, code })
    });
    return res.json();
  },

  async submitDSACode({ problemId, language, code }) {
    const res = await fetch('/api/dsa/submit', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ problemId, language, code })
    });
    return res.json();
  },

  async getDSAProblemSubmissions(problemId) {
    const res = await fetch(`/api/dsa/problems/${encodeURIComponent(problemId)}/submissions`, {
      headers: getAuthHeaders()
    });
    return res.json();
  },

  async getDSAAIReview({ problemId, language, code, errorSummary, status }) {
    const res = await fetch('/api/dsa/ai-review', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ problemId, language, code, errorSummary, status })
    });
    return res.json();
  },

  // Voice Assistant (Gemini STT & TTS)
  async getVoiceOptions() {
    const res = await fetch('/api/voice/voices');
    return res.json();
  },

  async transcribeAudio({ audio, mimeType = 'audio/webm', language = 'en' }) {
    const res = await fetch('/api/voice/transcribe', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ audio, mimeType, language })
    });
    return res.json();
  },

  async synthesizeSpeech({ text, voice = 'Puck' }) {
    const res = await fetch('/api/voice/synthesize', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ text, voice })
    });
    if (!res.ok) {
      let errMsg = 'Failed to synthesize speech';
      try {
        const errJson = await res.json();
        errMsg = errJson.error || errMsg;
      } catch (_) {}
      throw new Error(errMsg);
    }
    const blob = await res.blob();
    return blob;
  }
};

export default api;

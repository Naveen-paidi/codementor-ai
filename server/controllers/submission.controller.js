import { submissionService } from '../services/submission.service.js';

export const handleSubmitCode = async (req, res, next) => {
  try {
    const { questionId, language, code, attemptNumber = 1 } = req.body;
    const userId = req.user?.id || 'guest-learner';

    if (!questionId || !code) {
      return res.status(400).json({ success: false, error: 'questionId and code are required.' });
    }

    const result = await submissionService.submitSolution({
      userId,
      questionId,
      language,
      code,
      attemptNumber: Number(attemptNumber) || 1
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

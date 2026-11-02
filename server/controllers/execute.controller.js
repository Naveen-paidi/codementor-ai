import { executeCode } from '../services/execution/executor.js';

export const handleExecuteCode = async (req, res, next) => {
  try {
    const { language, code, stdin = '', timeoutMs = 8000 } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, error: 'Code is required for execution.' });
    }

    const result = await executeCode(language, code, stdin, Math.min(15000, Number(timeoutMs) || 8000));
    res.json(result);
  } catch (error) {
    next(error);
  }
};

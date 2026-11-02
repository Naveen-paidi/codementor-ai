/**
 * In-memory sliding window rate limiter for AI and execution endpoints
 */
const requestCounts = new Map();

export const rateLimiter = ({ windowMs = 60000, max = 60, message = 'Too many requests, please slow down.' }) => {
  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const key = `${ip}:${req.path}`;
    const now = Date.now();

    const record = requestCounts.get(key) || { count: 0, resetTime: now + windowMs };

    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + windowMs;
    } else {
      record.count += 1;
    }

    requestCounts.set(key, record);

    if (record.count > max) {
      return res.status(429).json({
        success: false,
        error: message,
        retryAfterSeconds: Math.ceil((record.resetTime - now) / 1000)
      });
    }

    next();
  };
};

/**
 * Request body validator
 */
export const validateBody = (requiredFields = []) => {
  return (req, res, next) => {
    if (!req.body) {
      return res.status(400).json({ success: false, error: 'Request body is required.' });
    }
    const missing = requiredFields.filter(f => req.body[f] === undefined || req.body[f] === null || req.body[f] === '');
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing required field(s): ${missing.join(', ')}`
      });
    }
    next();
  };
};

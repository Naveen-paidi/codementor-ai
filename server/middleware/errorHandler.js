/**
 * Centralized API Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error ${statusCode}] ${req.method} ${req.originalUrl}:`, err.stack || message);

  res.status(statusCode).json({
    success: false,
    error: message,
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

/**
 * 404 Not Found Handler
 */
export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Endpoint not found: ${req.method} ${req.originalUrl}`
  });
};

export default function routeErrHandler(req, res, next) {
  res.status(404).json({
    error: `경로를 찾을 수 없습니다: ${req.originalUrl}`
  });
}

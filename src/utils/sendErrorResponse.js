export default function sendErrorResponse(res, message, statusCode = 501) {
  res.status(statusCode).json({ message: message });
}

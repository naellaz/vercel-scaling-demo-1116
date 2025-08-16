export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Vercel instance!",
    instaneId: process.env.VERCEL_REGION || "unknown",
    time: new date().toISOString(),
    memory: process.memoryUsage(),
    uptime: process.uptime()
  });
}

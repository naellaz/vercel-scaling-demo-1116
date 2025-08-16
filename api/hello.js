export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Vercel instance!",
    instanceId: process.env.VERCEL_REGION || "unknown",
    time: new Date().toISOString(),
    memory: process.memoryUsage(),
    uptime: process.uptime()
  });
}

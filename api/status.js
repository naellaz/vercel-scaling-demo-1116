export default function handler(req, res) {
  res.status(200).json({
    status: "healthy",
    instanceId: process.env.VERCEL_REGION || "unknown",
    region: process.env.VERCEL_REGION,
    timestamp: new Date().toISOString(),
    headers: req.headers,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    loadavg: require('os').loadavg(),
    platform: process.platform,
    nodeVersion: process.version
  });
}

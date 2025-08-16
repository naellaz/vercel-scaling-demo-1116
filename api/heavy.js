export default function handler(req, res) {
  const start = Date.now();
  const iterations = parseInt(req.query.iterations) || 1e7;
  
  // Simulasi CPU intensive task
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += Math.sqrt(i);
  }
  
  const duration = Date.now() - start;
  
  res.status(200).json({
    result: sum,
    iterations: iterations,
    duration: `${duration}ms`,
    instanceId: process.env.VERCEL_REGION || "unknown",
    time: new Date().toISOString(),
    memory: process.memoryUsage()
  });
}

export default function handler(req, res) {
  const start = Date.now();

  const iterations = 1e7;
  
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += i;
  }
  
  const duration = Date.now() - start;
  
  res.status(200).json({ 
    sum, 
    iterations,
    time: new Date().toISOString(),
    duration: `${duration}ms`,
    instanceId: process.env.VERCEL_REGION || "unknown",
    memory: process.memoryUsage(),
  });
}

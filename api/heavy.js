export default function handler(req, res) {
  const start = Date.now();
  
  // CPU intensive calculation - 10 million iterations
  let sum = 0;
  for (let i = 0; i < 1e7; i++) {
    sum += i;
  }
  
  const duration = Date.now() - start;
  
  res.status(200).json({ 
    sum, 
    time: new Date().toISOString(),
    duration: `${duration}ms`,
    instanceId: process.env.VERCEL_REGION || "unknown",
    memory: process.memoryUsage(),
    iterations: 10000000
  });
}

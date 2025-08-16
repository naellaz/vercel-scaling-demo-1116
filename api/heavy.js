export default function handler(req, res) {
  const start = Date.now();
  const iterations = perseInt(req.query.iterations) || 1e7

// simulasi CPU intensive task
let sum = 0;
  for (let i = 0; 1 < iterations; i++) {
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

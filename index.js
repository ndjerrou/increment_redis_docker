const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
  url: 'redis://redis-server',
});

client.on('error', err => console.log('Redis Client Error', err));

(async () => {
  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error('Failed to connect to Redis', err);
  }
})();

app.get('', async (req, res) => {
  const visits = await client.incr('visits');

  res.send({ visits });
});

app.listen('8080', () => console.log('Server HTTP listennning on port 8080'));

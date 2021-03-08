const redis = require('redis');

const redisClient = redis.createClient();
redisClient.on('error', function (error) {
  console.error(error);
});

const _readScores = () => {
  return new Promise((resolve, reject) => {
    redisClient.keys('*', (err, reply) => {
      if (err !== null) {
        reject(err);
      }
      resolve(reply);
    });
  });
};

const _readScoresById = (id) => {
  return new Promise((resolve, reject) => {
    redisClient.get(id, (err, reply) => {
      if (err !== null) {
        reject(err);
      }
      resolve(reply);
    });
  });
};

const _createScore = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, value, (err, res) => {
      if (err !== null) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = {
  readScores: _readScores,
  readScoresById: _readScoresById,
  createScore: _createScore
};

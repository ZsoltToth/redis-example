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

const _readScoresById = (id, callback) => {
  redisClient.get(id, (err, reply) => {
    if (err !== null) {
      console.error(err);
    }
    callback(reply);
  });
};

module.exports = {
  readScores: _readScores,
  readScoresById: _readScoresById
};

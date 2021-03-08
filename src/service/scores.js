const redis = require('redis');

const redisClient = redis.createClient();
redisClient.on('error', function (error) {
  console.error(error);
});

const _readScores = (callback) => {
  redisClient.set('key', 'value', redis.print);
  redisClient.get('key', redis.print);

  redisClient.keys('*', (err, reply) => {
    if (err !== null) {
      console.error(err);
    }
    callback(reply);
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

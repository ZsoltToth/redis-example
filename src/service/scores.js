const dao = require('../dao/scores');

const _readScores = (callback) => {
  dao.readScores().then((keys) => callback(keys));
};

const _readScoresById = (id, callback) => {
  dao.readScoresById(id).then(value => callback(value));
};

const _recordScore = (key, value) => {
  return dao.createScore(key, value);
};

module.exports = {
  readScores: _readScores,
  readScoresById: _readScoresById,
  recordScore: _recordScore
};

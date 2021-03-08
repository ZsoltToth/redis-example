const dao = require('../dao/scores');

const _readScores = (callback) => {
  dao.readScores().then((keys) => callback(keys));
};

const _readScoresById = (id, callback) => {
  dao.readScoresById(id, callback);
};

module.exports = {
  readScores: _readScores,
  readScoresById: _readScoresById
};

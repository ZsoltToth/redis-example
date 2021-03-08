const service = require('../service/scores');

const _listScores = (req, res) => {
  service.readScores((scores) => {
    res.status(200).send(scores);
  });
};

const _listById = (req, res) => {
  service.readScoresById(req.params.id, (scores) => {
    res.status(200).send(scores);
  });
};

module.exports = {
  listScores: _listScores,
  listById: _listById
};

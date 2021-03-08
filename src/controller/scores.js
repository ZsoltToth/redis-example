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

const _recordScore = (req, res) => {
  service.recordScore(req.body.key, req.body.value)
    .then(res.status(200).send());
};

module.exports = {
  listScores: _listScores,
  listById: _listById,
  recordScore: _recordScore
};

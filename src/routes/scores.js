const express = require('express');
const router = express.Router();
const contoller = require('../controller/scores');

/**
 * @swagger
 * /score:
 *    get:
 *      summary: get all the participants
 *      responses:
 *        200:
 *          description: list of scores
 */
router.get('/', contoller.listScores);

/**
 * @swagger
 * /score/{id}:
 *    get:
 *      summary: get all scores
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          description: list of scores
 */
router.get('/:id', contoller.listById);

/**
 * @swagger
 * /score/:
 *    post:
 *      summary: record a new score
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                key:
 *                  type: string,
 *                  required: true
 *                value:
 *                  type: integer
 *                  required: true
 *      responses:
 *        200:
 *          description: list of scores
 */
router.post('/', contoller.recordScore);

module.exports = router;

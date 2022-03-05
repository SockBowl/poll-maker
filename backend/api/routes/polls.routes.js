import express from 'express';
import PollsCtrl from '../controllers/polls.controller.js';

const router = express.Router();

router
  .route('/')
  .get(PollsCtrl.apiGetAllPolls)
  .post(PollsCtrl.apiAddNewPoll)
  .put(PollsCtrl.apiAddVoteById);
router.route('/id/:id').get(PollsCtrl.apiGetPollById);

export default router;

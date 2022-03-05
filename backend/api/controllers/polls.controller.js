import PollServices from '../services/pollServices.js';

export default class PollsCtrl {
  static async apiGetAllPolls(req, res, next) {
    try {
      const polls = await PollServices.getAllPolls();
      if (!polls) {
        res.status(404).json('There are no polls yet!');
      }
      res.json(polls);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async apiGetPollById(req, res, next) {
    try {
      const poll = await PollServices.getPollById(req.params.id);
      if (!poll) {
        res.status(404).json('Poll not found!');
      }
      res.json(poll);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async apiAddVoteById(req, res, next) {
    const { id, ans } = req.body;
    try {
      const updated = await PollServices.addVoteById(id, ans);
      if (!updated) {
        res.status(500).json('Internal Server Error');
      }
      res.json(updated);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async apiAddNewPoll(req, res, next) {
    const { question, ansOne, ansTwo } = req.body;
    try {
      const newPoll = await PollServices.addNewPoll(question, ansOne, ansTwo);
      if (!newPoll) {
        res.status(500).json('Internal Server Error');
      }
      res.json(newPoll);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

import Poll from '../models/poll.js';

export default class PollServices {
  static async getAllPolls() {
    try {
      const allPolls = await Poll.find();
      return allPolls;
    } catch (e) {
      console.log(`Could not fetch polls ${e}`);
    }
  }

  static async getPollById(id) {
    try {
      const indPoll = await Poll.findById(id);
      return indPoll;
    } catch (e) {
      console.log(`Could not find poll ${e}`);
    }
  }

  static async addVoteById(id, ans) {
    try {
      const indPoll = await Poll.findById(id);
      indPoll[ans].votes = indPoll[ans].votes + 1;
      const updated = await indPoll.save();
      return updated;
    } catch (e) {
      console.log(`Could vote on poll ${e}`);
    }
  }

  static async addNewPoll(newQuestion, newAnsOne, newAnsTwo) {
    try {
      const newPoll = new Poll({
        question: newQuestion,
        ansOne: { ans: newAnsOne, votes: 0 },
        ansTwo: { ans: newAnsTwo, votes: 0 }
      });
      const doc = await Poll.create(newPoll);
      return doc;
    } catch (e) {
      console.log(`Could not find poll ${e}`);
    }
  }
}

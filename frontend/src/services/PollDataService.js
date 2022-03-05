import http from '../http-common';

class PollDataService {
  getAll() {
    return http.get('/');
  }

  async updateVote(id, ans) {
    return await http.put('/', { id, ans });
  }

  async addNewPoll(question, ansOne, ansTwo) {
    return await http.post('/', { question, ansOne, ansTwo });
  }
}

export default new PollDataService();

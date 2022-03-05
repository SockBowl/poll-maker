import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  question: { type: String, required: true },
  ansOne: {
    ans: { type: String, required: true },
    votes: { type: Number, default: 0 }
  },
  ansTwo: {
    ans: { type: String, required: true },
    votes: { type: Number, default: 0 }
  }
});

export default mongoose.model('Poll', pollSchema);

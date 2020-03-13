import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    lowcase: true,

  },
  starsHistory: [],
  stars: {
    type: Number,
    default: 0,

  },
});

export default mongoose.model('User', UserSchema);

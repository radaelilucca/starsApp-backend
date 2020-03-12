import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  nickname: {
    type: String,
    unique: true,
    lowcase: true,
  }
})

export default mongoose.model('User', UserSchema)
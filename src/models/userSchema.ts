import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
 username: {
  type: String,
  required: [false, 'Please provide a username.'],
 },
 email: {
  type: String,
  required: [true, 'Please provide a email.'],
  unique: true,
 },
 password: {
  type: String,
  required: [true, 'Please provide a password.'],
 },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

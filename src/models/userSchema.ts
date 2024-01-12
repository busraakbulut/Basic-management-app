import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
 username: {
  type: String,
  required: [false, 'Please provide a username.'],
 },
 email: {
  type: String,
  required: [true, 'Please provide a email.'],
 },
 password: {
  type: String,
  required: [true, 'Please provide a password.'],
 },
});

const User = mongoose.models.user || mongoose.model('User', UserSchema);

export default User;

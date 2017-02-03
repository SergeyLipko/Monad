import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  userLogin: String,
  userPassword: String,
  userFirstName: String,
  userLastName: String,
});

const User = mongoose.model('User', UserSchema);
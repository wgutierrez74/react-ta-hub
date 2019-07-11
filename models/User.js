const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  displayName: String,
  coursesTaken: [String],
  courseGrades: [String],
  abilities: String,
  gpa: Number,
  newCourses:[String],
  type: String,
  email: String,
  recomendations: [String]
});

mongoose.model('User', userSchema);

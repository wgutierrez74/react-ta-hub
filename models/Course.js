const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  courseNumber: String,
  courseName: String,
  instructors: [String],
  tas:[String]

});

mongoose.model('Course', courseSchema);

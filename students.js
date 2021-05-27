const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify',false)
const studentSchedule = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    dnum: [0, 1],
    default: 0
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})
const Students = mongoose.model("students", studentSchedule)
module.exports =Students
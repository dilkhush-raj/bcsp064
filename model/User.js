const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    default: 'student', 
  },
    name: {
      type: String,
      required: true,
    },
    email: String,
    image: String,
    programme: String,
    semester: Number,
    enrolment: Number,
    enrolment: Number,
    mobile: Number,
    email2: String,
    address: String,
    verified: Boolean,
  });
  

mongoose.models = {};
export default mongoose.model("User", UserSchema);

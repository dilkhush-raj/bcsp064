const mongoose = require("mongoose");

// Schema for Notice
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
    enrollment: Number,
    enrolment: Number,
    mobile: Number,
    email2: String,
    address: String,
    verified: Boolean,
  });
  

mongoose.models = {};
export default mongoose.model("User", UserSchema);

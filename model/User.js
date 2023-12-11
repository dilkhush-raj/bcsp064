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
    mobile: Number,
    address: String,
    verified: Boolean,
  });
  

mongoose.models = {};
export default mongoose.model("User", UserSchema);

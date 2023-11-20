const mongoose = require("mongoose");

// Schema for Notice
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: String,
    image: String,
    programme: String,
    role: {
      type: String,
      default: 'student', 
    },
    enrollment: Number,
  });
  

mongoose.models = {};
export default mongoose.model("User", UserSchema);

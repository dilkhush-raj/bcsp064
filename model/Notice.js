const mongoose = require("mongoose");

// Schema for Notice
const NoticeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  link: String,
  programme: String,
  semester: [String],
  date: Date,
  visible: {
    type: Boolean,
    require: true,
  },
});

mongoose.models = {};
export default mongoose.model("Notice", NoticeSchema);

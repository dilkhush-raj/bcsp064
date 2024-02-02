const mongoose = require("mongoose");

// Schema for Notice
const NoticeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: String,
  programme: String,
  semester: [String],
  createdOn: { type: Date, default: Date.now },
});

mongoose.models = {};
export default mongoose.model("Notice", NoticeSchema);

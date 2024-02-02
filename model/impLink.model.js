const mongoose = require("mongoose");

// Schema for Imp Link
const ImpLinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: String,
});

mongoose.models = {};
export default mongoose.model("ImpLink", ImpLinkSchema);

const mongoose = require("mongoose");

// Schema for individual semesters
const SemesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  img: String,
});

// Schema for academic programs
const ProgrammeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  programType: {
    type: String,
    enum: ["year", "semester"],
    required: true,
  },
  visible: {
    type: Boolean,
    require: true,
  },
  img: String,
  description: String,
  semesters: [SemesterSchema],
});

mongoose.models = {};
export default mongoose.model("Programme", ProgrammeSchema);

const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
    name: String,
    url: String,
});

const BlockSchema = new mongoose.Schema({
    name: String,
    units: [UnitSchema],
});


const CourseSchema = new mongoose.Schema({
    name: String,
    slug: String,
    semester: Number,
    category: String,
    block: [BlockSchema],
});


mongoose.models = {}
export default mongoose.model('Course', CourseSchema);
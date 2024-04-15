import { Schema, model, models } from 'mongoose';

const StudentSchema = new Schema({
  enrolment: {type: String},
  name: {type: String},
})

const ScheduleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  programme: { type: String, required: true },
  course: { type: String, required: true },
  group: { type: String, required: true },
  date: { type: Date },
  // time: {type: },
  duration: { type: String },
  students: [StudentSchema],
  createdOn: { type: Date, default: Date.now },
});

const Schedule = models.Schedule || model('Schedule', ScheduleSchema);

export default Schedule;
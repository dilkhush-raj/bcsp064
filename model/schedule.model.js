import { Schema, model, models } from 'mongoose';

const ScheduleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  programme: { type: String, required: true },
  course: { type: String, required: true },
  group: { type: String, required: true },
  start: { type: Date },
  end: { type: Date },
  students: [String],
  createdOn: { type: Date, default: Date.now },
});

const Schedule = models.Schedule || model('Schedule', ScheduleSchema);

export default Schedule;
import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const StudentModel = mongoose.model("Student", studentSchema);
export default StudentModel;

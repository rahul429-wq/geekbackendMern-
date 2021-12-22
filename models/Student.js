import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  fees: { type: mongoose.Decimal128, required: true },
});
const StudentModel = mongoose.model("Student", studentSchema);
export default StudentModel;

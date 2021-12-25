import mongoose from "mongoose";
import StudentModel from "../models/Student.js";
class StudentController {
  static createDoc = async (req, res) => {
    try {
      // console.log(req.body.name);
      // console.log(req.body.email);
      // if (req.body.name === "" || req.body.email === "") {
      //   res.status(404).send("Something is wrong...");
      // }
      const { name, email } = req.body;
      if (!name || !email) {
        res.status(422).json({
          message: "Please fill all the fields",
        });
      }
      const doc = new StudentModel(req.body);
      const result = await doc.save();
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find();
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static getSingleDocById = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id);
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static deleteDocById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id);
      res.status(204).send(result);
    } catch (err) {
      console.log(err);
    }
  };
}
export default StudentController;

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//persistencia/guardar

let students = [];
let courses = [];
let enrollments = [];

//Routes

app.get("/", (req,res)=>{
    res.send("Welcome to the Academic Management System");
});

// Crear estudiante
app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send(`Estudiante ${newStudent.name} agregado exitosamente`);
});

//solicitar estudiantes

app.get("/students", (req, res) => {
  res.json(students);
});

// Crear curso

app.post("/courses", (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.send(`Curso ${newCourse.title} agregado exitosamente`)
});

// Solicitar cursos

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
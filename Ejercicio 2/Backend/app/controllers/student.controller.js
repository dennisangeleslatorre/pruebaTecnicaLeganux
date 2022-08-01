import Student from "../models/student.schema.js";

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json({ data: students, status: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const createStudent= async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).json({ data: newStudent, status: 'OK', message: "Creado con exito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        let message = student ? "Estudiante encontrado" : "No se encontro al estudiante";
        res.status(200).json({ data: student, status: 'OK', message: message });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        const body = req.body;
        student.name = body.name;
        student.age = body.age;
        student.active = body.active;
        await student.save();
        res.status(200).json({ data: student, status: 'OK', message: "Actualizado con éxito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        await student.remove();
        res.status(200).json({ data:{} , status: 'OK', message: "Eliminado con éxito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

export { createStudent, getStudentById, updateStudent, deleteStudent, getAllStudents };
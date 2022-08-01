import ClassRoom from "../models/classRoom.schema.js";

const getAllClassRooms = async (req, res) => {
    try {
        const classrooms = await ClassRoom.find({});
        res.status(200).json({ data: classrooms, status: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const createClassRoom = async (req, res) => {
    try {
        const newClassRoom = new ClassRoom(req.body);
        await newClassRoom.save();
        res.status(200).json({ data: newClassRoom, status: 'OK', message: "Creado con exito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const getClassRoomById = async (req, res) => {
    try {
        const classRoom = await ClassRoom.findById(req.params.classRoomId);
        let message = classRoom ? "Salon de clase encontrado" : "No se encontro el salon";
        res.status(200).json({ data: classRoom, status: 'OK', message: message });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const updateClassRoom  = async (req, res) => {
    try {
        const classRoom = await ClassRoom.findById(req.params.classRoomId);
        const body = req.body;
        classRoom.Class = req.body.Class;
        classRoom.Order = req.body.Order;
        classRoom.numberOfStudents = req.body.numberOfStudents;
        classRoom.active = req.body.active;
        classRoom.students = req.body.students;
        await classRoom.save();
        res.status(200).json({ data: classRoom, status: 'OK', message: "Actualizado con éxito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

const deleteClassRoom = async (req, res) => {
    try {
        const classRoom = await ClassRoom.findById(req.params.classRoomId);
        await classRoom.remove();
        res.status(200).json({ data:{} , status: 'OK', message: "Eliminado con éxito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error de servidor", status: 'BAD' });
    }
}

export { createClassRoom, getClassRoomById, updateClassRoom, deleteClassRoom, getAllClassRooms };
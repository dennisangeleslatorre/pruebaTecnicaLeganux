import { Router } from 'express';
import  { createStudent, getStudentById, updateStudent , deleteStudent, getAllStudents } from '../controllers/student.controller.js'
const router = Router();
const studentId = "/:studentId";

router.get(
    "/",
    getAllStudents
);

router.get(
    studentId,
    getStudentById
);

router.post(
    '/',
    createStudent
);

router.put(
    studentId,
    updateStudent
);

router.delete(
    studentId,
    deleteStudent
);
  


export default router;
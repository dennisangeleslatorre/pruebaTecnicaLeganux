import { Router } from 'express';
import  { createClassRoom, getClassRoomById, updateClassRoom , deleteClassRoom, getAllClassRooms } from '../controllers/classRoom.controller.js'
const router = Router();
const classRoomId = "/:classRoomId";

router.get(
    '/',
    getAllClassRooms
);

router.get(
    classRoomId,
    getClassRoomById
);

router.post(
    '/',
    createClassRoom
);

router.put(
    classRoomId,
    updateClassRoom
);

router.delete(
    classRoomId,
    deleteClassRoom
);
  


export default router;
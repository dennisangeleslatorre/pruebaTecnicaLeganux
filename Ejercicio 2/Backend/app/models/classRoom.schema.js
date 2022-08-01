import mongoose from "mongoose";
import StudentSchema from './student.schema.js';

const ClassRoomSchema = new mongoose.Schema(
    {
        Class: {
            type: String,
            required: true
        },
        Order: {
            type: Number,
            required: true
        },
        numberOfStudents: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        },
        students: []

    },
);

export default mongoose.model('ClassRoom', ClassRoomSchema)
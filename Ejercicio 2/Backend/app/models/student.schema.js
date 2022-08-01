import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            default: false
        },
    },
);

export default mongoose.model('Student', StudentSchema);
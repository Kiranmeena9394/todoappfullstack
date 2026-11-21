import mongoose from "mongoose";

const todoSchenma = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
    },

    },{
        timestamps: true,
    }
);

const Todo = mongoose.model("Todo", todoSchenma);
export default Todo;
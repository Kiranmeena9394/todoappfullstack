import Todo from "../models/todo.model.js";

// Create a new todo
export const createTodo = async (req, res) => {
    try{
        const {title, description}= req.body;    

        const todo = await Todo.create({
            title,
            description
        });

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            todo,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to create Todo",
        });
    }
};

//get all todos

export const getTodos = async (req, res) => {
    try{
        const todos = await Todo.find();

        res.status(200).json({
            success: true,
            message: "Todos fetched successfully",
            todos,
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to fetch Todos",
        });
    }
}

//update a todo

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    
    try{
        const todo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            todo,
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Failed to update Todo",
        })
    }
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try{
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            })
        }
        res.status(200).json({
        success: true,
        message: "Todo deleted successfully",
    });
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Failed to delete Todo",
        })
    }
}
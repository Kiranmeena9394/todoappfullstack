import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

function Home(){
    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     getTodos().then(setTodos);
    // }, []);

    return(
        <div>
            <h1>My Todo App</h1>
            <TodoForm onAdd={(todo) => setTodos([...todos, todo])} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Home;
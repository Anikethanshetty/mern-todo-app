import axios from "axios"

export function Todos({todos}){
    return <div>
    {todos.map(todo=>{
        return <div>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
        <button>{todo.completed == true ? "Completed" : "Not Completed"}</button>
        </div>
    })}
    </div>
}
import axios from "axios"
import { useState } from "react"

export function CreateTodo(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")

    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={(e)=>{
            const value = e.target.value
            setTitle(value)
        }}/> <br />
        
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={(e)=>{
            const value = e.target.value
            setDescription(value)
        }}/> <br />

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            axios.post("http://localhost:8080/todo",{
                    title:title,
                    description:description
            })
            .then(()=>{
                alert("Added todo")
            })
            .catch((error) => {
                console.error("Error adding todo:", error)
            })
        }}>Add a todo</button>
    </div>
}
 

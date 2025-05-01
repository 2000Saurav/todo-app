import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TaskList from "./TaskList";
import DateTime from "./DateTime";
import './Todo.css';

const todoKey = 'reactTodo'
export default function Todo(){
const [tasks, setTask] = useState(()=>{
    const rawData = localStorage.getItem(todoKey)
    if(!rawData) return [];
    return JSON.parse(rawData);
});
function handleTaskForm(input){
    const {id, content, status} = input
    if(!input) return
    const ifTodoContentmatched = tasks.find((currTask)=> currTask.content === content)

    if(ifTodoContentmatched) return
    setTask((prevTask)=>[...prevTask, {id: id, content:content, status:status }])
    console.log(tasks)
}

function handleDelete(index){
    console.log(index)
    const upadtedTask = tasks.filter((task) => task.id !== index)
    setTask(upadtedTask)
    
}

function handleChecked(checkedValue){
   const updatedTask =  tasks.map((task)=>
        task.id === checkedValue ? {...task, status: !task.status} : task
    )

    setTask(updatedTask)
    console.log('Clicked')
}
useEffect(()=>{localStorage.setItem(todoKey, JSON.stringify(tasks))}, [tasks])

    return(
        <>
        <h1>Todo Form</h1>
        <DateTime />
        <TodoForm  onAddTodo={handleTaskForm}/>
        <TaskList taskData={tasks} onDelete={handleDelete} onChecked={handleChecked}/>
        </>
    )
}
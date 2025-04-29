import {useState } from "react"

export default function TodoForm({onAddTodo}) {
    const [inputVal, setInputVal] = useState({})
    function handleInputVal(value){
        setInputVal({id:Date.now(), content:value, status: false})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        if(!inputVal) return
        onAddTodo(inputVal);
        setInputVal({id:'', content:'', status:''});
    }
    return (
       <>
       <form onSubmit={handleSubmit}>
       <input type="text" 
       value={inputVal.content}
       onChange={(e)=> handleInputVal(e.target.value)}
       />
       <button>Add Task</button>
       </form>
       </>
    )
}
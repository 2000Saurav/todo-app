
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function TaskList({taskData, onDelete, onChecked}){
    
    return(
        <>
        <ul>
        {
            taskData.map((currTask)=>(
               
               <li key={currTask.id}> <span className={currTask.status ? "checkList" : "notCheckList"}>{currTask.content}</span>
               <FaCheck   onClick={()=> onChecked(currTask.id)}/>
               <MdDeleteForever  onClick={()=>onDelete(currTask.id)}/>
               
               </li> 
               
            ))
        }
        </ul>
        </>
    )
}
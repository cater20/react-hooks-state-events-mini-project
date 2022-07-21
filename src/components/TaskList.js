import React, { useState } from "react";
import Task from  "./Task"

function TaskList({task}) {
const [list, setList]=useState()

const handleDelete=(id)=>{
  const filteredList=list.filter((item,index)=>
{return index !==id})

setList(filteredList)
}


  return (
    <div className="tasks">
      {list.map((task,index)=>{
        return<Task key={index} id={index} task={task}
onDelete={handleDelete}   />   })}
    </div>
  );
}

export default TaskList;

import React, { useState } from "react";
import styles from "./task.module.css";

const Task = ({task,Totasks,setTasks}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [count,setCount] = useState(task.count)

  const remove = (id)=>{
    const item1 = Totasks.filter((i)=>i.id!=id)

    
    
    setTasks(item1)
  }
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox"  id={task.id} />{task.text}
      <div data-cy="task-text"></div>
      <button onClick={()=>setCount(count+1)}>Add</button>
      {count}
      <button onClick={()=>{if(count>=2) setCount(count-1)}}>Sub</button>
      <button data-cy="task-remove-button" onClick={()=>remove(task.id)}>Remove</button>
    </li>
  );
};

export default Task;

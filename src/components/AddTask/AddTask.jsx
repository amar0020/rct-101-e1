import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({totalTask,setTotalTask}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [text, setText] = useState(null)

  var count = 5

  const payload = {
    "id": count++,
    "text": text,
    "done": true,
    "count": 1
  }


  const addtask = (payload)=>{

    setText(payload)

    setTotalTask([...totalTask,text])
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={(e)=>setText(e.target.value)}/>
      <button data-cy="add-task-button" onClick={()=>{addtask(payload)}}>Add</button>
    </div>
  );
};

export default AddTask;

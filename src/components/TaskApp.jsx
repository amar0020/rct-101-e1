import React from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [totalTask,setTotalTask] = useState(0)

  const [itotal,setItotal] = useState(0)

  const showTotal=(data)=>{
    setTotalTask(data)
  }

  const itotal1= (data)=>{
      setItotal(data)
  }

 
  return (
    <div data-cy="task-app" className={styles.taskApp}>

      <TaskHeader total={totalTask} itotal={itotal} ></TaskHeader>
      {/* Header */}
      {/* Add Task */}
      <AddTask totalTask={totalTask} setTotalTask={setTotalTask}></AddTask>
      {/* Tasks */}
      <Tasks total={showTotal} itotal1={itotal1}></Tasks>
    </div>
  );
};

export default TaskApp;

import React, { useState } from "react";
import styles from "./tasks.module.css";

import tasks from "../../data/tasks.json"

import Task from "../Task/Task"

const Tasks = ({total,itotal1}) => {
  // NOTE: do not delete `data-cy` key value pair

  const [Totasks, setTasks] = useState(tasks)


  

  total(Totasks.length)

  itotal1(tasks.length)

  

  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {Totasks.map((task)=><Task task={task} Totasks={Totasks} setTasks={setTasks}></Task>)} 

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

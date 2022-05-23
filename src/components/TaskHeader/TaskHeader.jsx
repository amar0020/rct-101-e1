
import styles from "./taskHeader.module.css";

const TaskHeader = ({total,itotal}) => {
  // sample values to be replaced
 

  // NOTE: do not delete `data-cy` key value pair
  return (
    
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">Initial: {itotal}</b>
      <b data-cy="header-total-task">Final:{total}</b>
    </div>
  );
};

export default TaskHeader;

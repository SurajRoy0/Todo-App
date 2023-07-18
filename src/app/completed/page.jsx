import Todos from "@/components/Output/Todos";
import styles from "./Completed.module.css";
const CompletedTodos = () => {
  return (
    <div className={styles.completed}>
      <h1>Completed Todos</h1>
      <Todos allTodos={true} />
    </div>
  );
};

export default CompletedTodos;

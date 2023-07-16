import Todo from "./Todo";
import styles from "./Todos.module.css";
const Todos = () => {
  const todo = {
    todo: "Need to do all task related to DSA and have to submit on sharpener.",
    isDone: false,
  };
  return (
    <div className={styles.container}>
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
      <Todo todo={todo} />
    </div>
  );
};

export default Todos;

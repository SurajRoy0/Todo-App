"use client";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import styles from "./Todos.module.css";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const todo = {
    todo: "Need to do all task related to DSA and have to submit on sharpener.",
    isDone: false,
  };
  useEffect(async () => {
    const res = await fetch("/api/add-todo");
    const data = await res.json();
    setTodos(data.result);
  }, []);
  return (
    <div className={styles.container}>
      {todos?.map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;

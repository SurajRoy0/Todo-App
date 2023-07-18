"use client";

import React from "react";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  const todoCompletedHandler = async () => {
    if (!todo.isDone) {
      const updatedTodo = {
        todo: todo.todo,
        isDone: true,
        date: new Date(),
      };

      const res = await fetch("/api/add-todo", {
        method: "PUT",
        body: JSON.stringify({
          updatedTodo: updatedTodo,
          _id: todo._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    }
  };

  const handleDelete = async () => {
    const res = await fetch("/api/add-todo", {
      method: "DELETE",
      body: JSON.stringify({ id: todo._id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles.todo}>
      <div className={styles["todo-details"]}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={todoCompletedHandler}
          className={styles.checkbox}
        />
        <p className={todo.isDone ? styles.done : ""}>{todo.todo}</p>
      </div>
      <div className={styles["todo-actions"]}>
        <button onClick={handleDelete} className={styles.actionButton}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Todo;

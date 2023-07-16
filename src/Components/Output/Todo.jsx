"use client";

import React from "react";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = ({ todo, onEdit, onDelete, onToggle }) => {
  const handleEdit = () => {
    onEdit(todo);
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleToggle = () => {
    onToggle(todo);
  };

  return (
    <div className={styles.todo}>
      <div className={styles["todo-details"]}>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={handleToggle}
          className={styles.checkbox}
        />
        <p className={todo.isDone ? styles.done : ""}>{todo.todo}</p>
      </div>
      <div className={styles["todo-actions"]}>
        <button onClick={handleEdit} className={styles.actionButton}>
          <RiEdit2Line />
        </button>
        <button onClick={handleDelete} className={styles.actionButton}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Todo;

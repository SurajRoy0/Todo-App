"use client";

import React, { useRef } from "react";
import styles from "./AddTodo.module.css";
import { RiAddLine } from "react-icons/ri";

const AddTodo = () => {
  const totdoRef = useRef();

  const handleAddTodo = () => {
    const newTodo = {
      todo: totdoRef.current.value,
      isDone: false,
      date: new Date(),
    };
    console.log("Adding todo:", newTodo);
  };

  return (
    <div className={styles.todoInput}>
      <input
        type="text"
        placeholder="Add a todo..."
        ref={totdoRef}
        className={styles.input}
      />
      <button onClick={handleAddTodo} className={styles.addButton}>
        <RiAddLine />
      </button>
    </div>
  );
};

export default AddTodo;

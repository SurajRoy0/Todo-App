"use client";
import React, { useRef } from "react";
import styles from "./AddTodo.module.css";
import { RiAddLine } from "react-icons/ri";

const AddTodo = () => {
  const todoRef = useRef();

  const handleAddTodo = async () => {
    const newTodo = {
      todo: todoRef.current.value,
      isDone: false,
      date: new Date(),
    };

    const res = await fetch("/api/add-todo", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    myRef.current.value = "";
    console.log(data);
  };

  return (
    <div className={styles.todoInput}>
      <input
        type="text"
        placeholder="Add a todo..."
        ref={todoRef}
        className={styles.input}
      />
      <button onClick={handleAddTodo} className={styles.addButton}>
        <RiAddLine />
      </button>
    </div>
  );
};

export default AddTodo;

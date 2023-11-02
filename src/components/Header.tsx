import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";
import rocketLogo from "../assets/rocket.svg";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export function Header({
  onNewTaskTextChange,
  NewTaskText,
  setTasks,
  task,
}: any) {
  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>) {
    onNewTaskTextChange(event.target.value);
    event.target.setCustomValidity("");
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...task,
      {
        id: uuidv4(),
        title: NewTaskText,
        isComplete: false,
      },
    ]);
    onNewTaskTextChange("");
  }
  const isNewTaskEmpty = NewTaskText.length === 0;

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <img src={rocketLogo} />
        <h1></h1>
      </div>
      <div className={styles.searchContainer}>
        <form onSubmit={handleCreateNewTask} action="">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTextChange}
            value={NewTaskText}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            <p>Criar</p> <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </div>
    </header>
  );
}

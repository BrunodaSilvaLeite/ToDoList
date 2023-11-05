import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";
import rocketLogo from "../assets/rocket.svg";
import { FormEvent, ChangeEvent, InvalidEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface Tasks {
  id: string;
  title: string;
  isComplete: boolean;
}
interface PostProps {
  setNewTaskTextChange: (taskText: string) => void;
  NewTaskText: string;
  onCreateTask: (task: Tasks) => void;
}

export function Header({
  setNewTaskTextChange,
  NewTaskText,
  onCreateTask,
}: PostProps) {
  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTextChange(event.target.value);
    event.target.setCustomValidity("");
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask({
      id: uuidv4(),
      title: NewTaskText,
      isComplete: false,
    });
    setNewTaskTextChange("");
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

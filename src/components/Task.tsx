import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import Clipboard from "../assets/Clipboard.png";

interface Tasks {
  id: string;
  title: string;
  isComplete: boolean;
}

interface PostProps {
  task: Tasks;
  onDeleteTask: (IdTaskToDelete: string) => void;
}

export function Task({ task, onDeleteTask }: PostProps) {
  function handleDeleteComment(e: any) {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      {task.isComplete ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" />
      )}
      <p>{task.title}</p>
      <button onClick={handleDeleteComment} title="Deletar task">
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}

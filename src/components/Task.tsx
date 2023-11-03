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
  onCompletionTask: (taskCompleted: string) => void;
}

export function Task({ task, onDeleteTask, onCompletionTask }: PostProps) {
  function handleDeleteComment(e: any) {
    onDeleteTask(task.id);
  }

  function handleCompletionTask(e: any) {
    onCompletionTask(task.id);
  }

  return (
    <div className={styles.task}>
      {task.isComplete ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" onClick={handleCompletionTask} />
      )}
      <p>{task.title}</p>
      <button onClick={handleDeleteComment} title="Deletar task">
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}

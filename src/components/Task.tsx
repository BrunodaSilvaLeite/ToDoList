import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface Tasks {
  id: string;
  title: string;
  isComplete: boolean;
}

interface PostProps {
  task: Tasks;
  onDeleteTask: (IdTaskToDelete: string) => void;
  onTaskStatus: (taskCompleted: string) => void;
}

export function Task({ task, onDeleteTask, onTaskStatus }: PostProps) {
  function handleDeleteComment() {
    onDeleteTask(task.id);
  }

  function handleTaskFalse() {
    onTaskStatus(task.id);
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={handleTaskFalse}
      />

      <p>{task.title}</p>
      <button onClick={handleDeleteComment} title="Deletar task">
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}

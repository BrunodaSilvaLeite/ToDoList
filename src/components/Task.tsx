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
}

export function Task({ task }: PostProps) {
  return (
    <div className={styles.task}>
      {task.isComplete ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" />
      )}
      <p>{task.title}</p>
      <button title="Deletar task">
        <Trash size={24}></Trash>
      </button>
    </div>
  );
}

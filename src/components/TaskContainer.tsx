import styles from "./TaskContainer.module.css";
import Clipboard from "../assets/Clipboard.png";
import { Task } from "./Task";

export function TaskContainer({ tasks }: any) {
  return (
    <div>
      {tasks.length === 0 ? (
        <div className={styles.conatinerTask}>
          <img src={Clipboard} />
          <div className={styles.textNoTask}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        tasks.map((task: any) => {
          return <Task task={task} />;
        })
      )}
    </div>
  );
}

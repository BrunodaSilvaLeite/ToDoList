import styles from "./Container.module.css";
import Clipboard from "../assets/Clipboard.png";
import { Task } from "./Task";
import { useState } from "react";
import { Header } from "./Header";

export function Container({ tasks }: any) {
  const [task, setTasks] = useState(tasks);
  const [NewTaskText, setNewTaskText] = useState("");

  function onDeleteTask(IdTaskToDelete: String) {
    const commentsWithoutDeletedOne = task.filter((task: any) => {
      return task.id !== IdTaskToDelete;
    });
    setTasks(commentsWithoutDeletedOne);
  }

  return (
    <div>
      <Header
        onNewTaskTextChange={setNewTaskText}
        NewTaskText={NewTaskText}
        setTasks={setTasks}
        task={task}
      ></Header>
      <div className={styles.wrapper}>
        <div className={styles.conatinerTask}>
          <div className={styles.conatinerHeader}>
            <header>
              <strong>
                Tarefas criadas <span>{tasks.length}</span>
              </strong>
              <strong>
                Concluídas <span>1</span>
              </strong>
            </header>
          </div>

          {task.length === 0 ? (
            <div className={styles.conatinerNoTask}>
              <img src={Clipboard} />
              <div className={styles.textNoTask}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          ) : (
            task.map((task: any) => {
              return (
                <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

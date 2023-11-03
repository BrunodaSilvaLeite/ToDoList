import styles from "./Container.module.css";
import Clipboard from "../assets/Clipboard.png";
import { Task } from "./Task";
import { useState } from "react";
import { Header } from "./Header";

interface Tasks {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Container({ tasks }: any) {
  const [task, setTasks] = useState(tasks);
  const [NewTaskText, setNewTaskText] = useState("");

  function onDeleteTask(IdTaskToDelete: String) {
    const tasksWithoutDeletedOne = task.filter((task: any) => {
      return task.id !== IdTaskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }
  function onCompletionTask(idToChange: String) {
    const updatedTasks = tasks.map((tasks: any) =>
      tasks.id === idToChange ? { ...tasks, isComplete: true } : tasks
    );
    console.log(updatedTasks);
  }

  const completedTasks = task.reduce((count: number, task: any) => {
    return task.isComplete ? count + 1 : count;
  }, 0);

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
                Tarefas criadas <span>{task.length}</span>
              </strong>
              <strong>
                Concluídas
                <span>
                  {completedTasks} de {task.length}
                </span>
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
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onCompletionTask={onCompletionTask}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

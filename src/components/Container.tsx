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
interface TaskProps {
  tasks: Tasks[];
}

export function Container({ tasks }: TaskProps) {
  const [task, setTasks] = useState<Tasks[]>(tasks);
  const [NewTaskText, setNewTaskText] = useState("");

  function onDeleteTask(IdTaskToDelete: String) {
    const tasksWithoutDeletedOne = task.filter((task: Tasks) => {
      return task.id !== IdTaskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  function onTaskStatus(idToChange: String) {
    const updatedTasks = task.map((tasks: Tasks) => {
      if (tasks.id === idToChange) {
        return { ...tasks, isComplete: !tasks.isComplete };
      } else {
        return tasks;
      }
    });
    setTasks(updatedTasks);
  }

  function onCreateTask(oneTask: Tasks) {
    setTasks([...tasks, oneTask]);
  }

  const completedTasks = task.reduce((count: number, task: Tasks) => {
    return task.isComplete ? count + 1 : count;
  }, 0);

  return (
    <div>
      <Header
        setNewTaskTextChange={setNewTaskText}
        NewTaskText={NewTaskText}
        onCreateTask={onCreateTask}
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
                  onTaskStatus={onTaskStatus}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

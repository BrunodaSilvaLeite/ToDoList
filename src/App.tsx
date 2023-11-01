import styles from "./App.module.css";
import { Header } from "./components/Header";
import { TaskContainer } from "./components/TaskContainer";

import { v4 as uuidv4 } from "uuid";

const tasks = [
  {
    id: uuidv4(),
    title: "terminar desafio",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
];

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <div className={styles.conatiner}>
          <header>
            <strong>
              Tarefas criadas <span>{tasks.length}</span>
            </strong>
            <strong>
              Concluídas{" "}
              <span>
                {tasks.filter((task) => task.isComplete !== false).length}
              </span>
            </strong>
          </header>
          <TaskContainer tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

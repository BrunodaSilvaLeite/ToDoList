import styles from './App.module.css'
import {v4 as uuid} from "uuid"
import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import { Task } from './components/List/Task';
import { NoTask } from './components/List/NoTask';
import { Header as ListHeader } from './components/List/Header'

export interface ITask {
  id: string
  text: string
  isChecked: boolean
}


export function App() {
const [tasks, setTasks] = useState<ITask[]>([])
const [inputValue, setInputValue] = useState('')

const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
  if (currentTask.isChecked) {
    return prevValue + 1
  }

  return prevValue
}, 0)


function handleAddTask() {
  if (!inputValue) {
    return
  }

  const newTask: ITask = {
    id: uuid(),
    text: inputValue,
    isChecked: false,
  }

  setTasks((state) => [...state, newTask])
  setInputValue('')
}

function handleRemoveTask(id: string) {
  const filteredTasks = tasks.filter((task) => task.id !== id)

  setTasks(filteredTasks)
}

function handleToggleTask({ id, value }: { id: string; value: boolean }) {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isChecked: value }
    }

    return { ...task }
  })

  setTasks(updatedTasks)
}

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <NoTask />
          )}
        </div>
       
      </section>
      
    </main>
  );
}

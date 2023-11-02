import styles from "./App.module.css";

import { Container } from "./components/Container";

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
      <Container tasks={tasks} />
    </div>
  );
}

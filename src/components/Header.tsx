import styles from "./Header.module.css";
import { PlusCircle } from "phosphor-react";
import rocketLogo from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <img src={rocketLogo} />
        <h1></h1>
      </div>
      <div className={styles.searchContainer}>
        <form action="">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            <p>Criar</p> <PlusCircle size={16} weight="bold" />
          </button>
        </form>
      </div>
    </header>
  );
}

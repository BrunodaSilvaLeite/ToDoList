import styles from "./Header.module.css";

import rocketLogo from "../assets/rocket.svg";
import { GithubLogo } from "phosphor-react";


export function Header() {
  return (
    <header className={styles.container}>
      <img src={rocketLogo} alt="logo da aplicação" />
      <h1></h1>
      <div className={styles.gitHubLink}><a href='https://github.com/BrunodaSilvaLeite/ToDoList' target='_blank'>  <span><GithubLogo  size={16}  weight="bold" /></span><p>Repositório no Github</p></a></div>
    </header>
  )
}

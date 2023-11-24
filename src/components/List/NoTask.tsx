import styles from './NoTask.module.css'
import Clipboard from "../../assets/Clipboard.png";

export function NoTask() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

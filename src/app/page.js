
import AddTodo from '@/Components/Input/AddTodo'
import styles from './page.module.css'
import Todos from '@/Components/Output/Todos'


export default function Home() {
  return (
    <main className={styles.main}>
      <AddTodo />
      <h2 className={styles.heading}>Today's Todo List</h2>
      <Todos />
    </main>
  )
}

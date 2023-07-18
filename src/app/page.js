import AddTodo from '@/components/Input/AddTodo';
import styles from './page.module.css'
import Todos from '@/components/Output/Todos';


export default function Home() {

  return (
    <main className={styles.main}>
      <AddTodo />
      <h2 className={styles.heading}>Today's Todo List</h2>
      <Todos allTodos={false} />
    </main>
  )
}

import Sidebar from '@/components/Sidebar'
import { Header } from '../components/Header'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Princimpal</h1>
        </main>
      </div>
    </>
  )
}

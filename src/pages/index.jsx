import { Header } from '../components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Post } from '@/components/Post'

import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

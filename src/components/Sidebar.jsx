import Image from 'next/image'

import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=Mnw1xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt=""
        width={500}
        height={280}
      />
      <div className={styles.profile}>
        <Image
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/16341492?v=4"
          alt=''
          width={48}
          height={48}
        />
        <strong>Elias Costa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine 
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

import Image from 'next/image';
import styles from './Post.module.css';
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Image
            className={styles.avatar} 
            src='https://avatars.githubusercontent.com/u/16341492?v=4' 
            alt=''
            width={48}
            height={48}
          />
          <div className={styles.authorInfo}>
            <strong>Elias Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">publicado há 1 hora</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa</p>

        <p>Acabei de subir mais um projeto no meu portifa, É um projeto que fiz no NLW Return,
        evento da Rocketseat</p>

        <p><a href='#'>eliashead.dev/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}


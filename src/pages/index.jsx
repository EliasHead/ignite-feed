import { Header } from '../components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Post } from '@/components/Post'

import styles from '../styles/App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eliashead.png',
      name: 'Elias Costa',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera'},
      {type: 'paragraph', content: 'acabei de subir mais um projeto do no portifi,'},
      {type: 'link', content: 'elias.dev/doctorcare'},
    ],
    publishedAt: new Date('2023-05-23 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/FernandaNascimento26.png',
      name: 'Fernanda Nascimento',
      role: 'devops',
    },
    content: [
      {type: 'paragraph', content: 'Hello world'},
      {type: 'paragraph', content: 'acabei de subir mais um projeto do no portifi,'},
      {type: 'link', content: 'fernanda.dev/doctorcare'},
    ],
    publishedAt: new Date('2023-05-10 20:00:00'),
  }
]

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}          
        </main>
      </div>
    </>
  )
}

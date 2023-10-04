import { useEffect, useState } from 'react'

import { Comment, Post } from './api/models.ts'
import { getComments, getPosts } from './api'

import './App.css'

const App = () => {
  const [posts, setPosts] = useState<Post[]>()
  // const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    getPosts(signal).then((response) => setPosts(response))
    // getComments(signal, 1).then((response) => setComments(response))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <header>
        <nav>
          <a href="#">Home</a>
        </nav>
      </header>

      <main>
        <section>
          <ol>
            {posts?.map((post) => {
              return <li key={post.id}>{post.title}</li>
            })}
            {/* {comments?.map((comment) => { */}
            {/*   return <li key={comment.id}>{comment.name}</li> */}
            {/* })} */}
          </ol>
        </section>
      </main>
    </div>
  )
}

export default App

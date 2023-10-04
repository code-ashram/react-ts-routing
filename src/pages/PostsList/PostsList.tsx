import { FC, useEffect, useState } from 'react'

import { getPosts, Post } from '../../api'
import { Link } from 'react-router-dom'

const PostsList: FC = () => {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    getPosts(signal).then((response) => setPosts(response))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <ul>
      {posts?.map((post) => {
        return <li className="post" key={post.id}>
          <Link to={`posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      })}
    </ul>
  )
}

export default PostsList

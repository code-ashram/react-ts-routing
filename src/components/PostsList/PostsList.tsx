import { FC, useEffect, useState } from 'react'

import { getPosts, Post } from '../../api'
import PostsListItem from './parts/PostsListItem.tsx'

import styles from './PostsList.module.css'
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
    <ul className={styles.postsList}>
      {posts?.map((post) => (
        <Link className={styles.postsLink} to={`posts/${post.id}`}>
          <PostsListItem key={post.id} title={post.title} />
        </Link>
      ))}
    </ul>
  )
}

export default PostsList

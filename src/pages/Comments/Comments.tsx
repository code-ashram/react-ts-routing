import { useEffect, useState } from 'react'

import { getComments, Comment } from '../../api'

const Comments = () => {

  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    getComments(signal, 1).then((response) => setComments(response))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <ul>
      {comments?.map((comment) => {
        return <li key={comment.id}>
          <p>From: {comment.email}</p>
          <h3>Title: {comment.name}</h3>
          <p>Text: {comment.body}</p>
        </li>
      })}
    </ul>
  )
}

export default Comments

import { FC, useEffect, useState } from 'react'

import { Comment, getComments } from '../../api'
import CommentBody from './parts/CommentBody.tsx'

import styles from './CommentsList.module.css'

type Props = {
  id: number
}

const CommentsList: FC<Props> = ({ id }) => {
  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    getComments(signal, id).then((response) => setComments(response))

    return () => {
      controller.abort()
    }
  }, [])

  return (<ul className={styles.commentList}>
      {comments?.map((comment) => (
        <CommentBody key={comment.id} author={comment.email} title={comment.name} text={comment.body} />
      ))}
    </ul>
  )
}

export default CommentsList

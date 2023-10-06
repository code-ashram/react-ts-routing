import { FC } from 'react'

import styles from '../CommentsList.module.css'

type Props = {
  author: string
  title: string
  text: string
}

const CommentBody: FC<Props> = ({author, title, text}) => (
  <div className={styles.comment}>
    <h3 className={styles.commentTitle}>{title}</h3>

    <h4 className={styles.commentAuthor}>{author}</h4>

    <p className={styles.commentText}>{text}</p>
  </div>
)

export default CommentBody

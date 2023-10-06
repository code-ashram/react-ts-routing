import { FC } from 'react'

import styles from './HighlightedPost.module.css'

type Props = {
  title: string,
  text: string,
}

const HighlightedPost: FC<Props> = ({ title, text }) => (
  <article className={styles.highlightedPost}>
    <h2 className={styles.postTitle}>{title}</h2>

    <p className={styles.postText}>{text}</p>
  </article>
)

export default HighlightedPost

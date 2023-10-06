import { FC } from 'react'

type Props = {
  title: string
}

import styles from '../PostsList.module.css'

const PostsListItem: FC<Props> = ({ title }) => (
  <li className={styles.postsListItem}>
    {title}
  </li>
)

export default PostsListItem

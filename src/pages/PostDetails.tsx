import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'

import HighlightedPost from '../components/HighlightedPost'
import CommentsList from '../components/CommentsList'
import { useState } from 'react'

import styles from '../App.module.css'

type Params = {
  postId: string
}


const PostDetails = () => {
  const [isShowComments, setIsShowComments] = useState<boolean>(true)
  const { path, url } = useRouteMatch()
  const { postId } = useParams<Params>()

  const handleToggleComments = () => {
    setIsShowComments(false)
  }

  return (
    <>
      <HighlightedPost title={`Post ${postId}`} text={`Hi`} />

      {isShowComments &&
        <button className={styles.btn} onClick={handleToggleComments}>
          <Link className={styles.btnLink} to={`${url}/comments`}>
            Show Comments
          </Link>
        </button>
      }

      <Route path={`${path}/comments`}>
        <CommentsList id={Number(postId)}/>
      </Route>
    </>
  )
}

export default PostDetails

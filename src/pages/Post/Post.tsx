import { FC, useState } from 'react'

import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../Comments/Comments.tsx'

type Params = {
  postId: string
}

const Post: FC = () => {
  const [isShowComments, setIsShowComments] = useState<boolean>(true)
  const { path, url } = useRouteMatch()
  const params = useParams<Params>()

  return (
    <>
      <article>
        <h3>Article {params.postId}</h3>
        <p>Article text</p>
      </article>

      <Link to={`${url}/comments`}>Show comments</Link>

      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default Post

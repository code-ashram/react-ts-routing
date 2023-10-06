import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home.tsx'
import PostsList from './components/PostsList'
import PostDetails from './pages/PostDetails.tsx'

import './App.module.css'

const App = () => {

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/posts" exact>
          <PostsList/>
        </Route>

        <Route path="/posts/:postId">
          <PostDetails/>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

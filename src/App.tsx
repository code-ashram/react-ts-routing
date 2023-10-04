import Header from './components/Header/Header.tsx'

import { Redirect, Route, Switch } from 'react-router-dom'

import PostsList from './pages/PostsList/PostsList.tsx'
import Post from './pages/Post/Post.tsx'
import Home from './pages/Home/Home.tsx'

import './App.css'

const App = () => {

  return (
    <div>
      <Header />

      <main>
        <section>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/posts" exact>
              <PostsList />
            </Route>

            <Route path="/posts/:postId">
              <Post />
            </Route>
          </Switch>
        </section>
      </main>
    </div>
  )
}

export default App

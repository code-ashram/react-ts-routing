import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/posts" activeClassName="active">Articles</NavLink>
      </nav>
    </header>
  )
}

export default Header

import { NavLink } from 'react-router-dom'

import styles from '../Layout.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink to="/home" activeClassName="active">Home</NavLink>

      <NavLink to="/posts" activeClassName="active">Posts</NavLink>
    </nav>
  </header>
)

export default Header

import { FC, ReactNode } from 'react'

import Header from './parts/Header.tsx'

import styles from './Layout.module.css'

type Props = {
  children: ReactNode
}


const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />

    <main className={styles.main}>
      {children}
    </main>
  </>
)

export default Layout

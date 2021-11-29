import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'

const Header = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/sports">Sports</Link>
          </li>
          <li className={styles.list}>
            <Link to="/fixture">Fixtures</Link>
          </li>
          <li className={styles.list}>
            <Link to="/odds">Odds</Link>
          </li>
          <li className={styles.list}>
            <Link to="/market">Market</Link>
          </li>
          <li className={styles.list}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header

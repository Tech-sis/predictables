import React from 'react'
import styles from '../styles/login.module.css'

const Login = () => {
    return (
      <div className={styles.container}>
        <h3 className={styles.h1}>Please Sign In</h3>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Username" />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button className={styles.btn} type="submit">
            Login
          </button>
        </form>
      </div>
    )
}

export default Login

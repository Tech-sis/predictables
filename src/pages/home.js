import React from 'react'
import Fixtures from '../components/fixtures'
import styles from '../styles/home.module.css'

const Home = () => {
    return (
        <div className={styles.fix}>
            {/* <h1>Home</h1> */}
            <Fixtures />
        </div>
    )
}

export default Home

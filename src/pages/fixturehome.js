import React from 'react'
import Away from '../components/awayteam'
import Home from '../components/hometeam'
import Head2Head from '../components/head2head'
import styles from '../styles/home.module.css'


const Fixturehome = () => {
    return (
        <div className={styles.fix}>
            <h1 className={styles.h1}>Recent Games</h1>
            <Home />
            <Head2Head />
        </div>
        
    )
}

export default Fixturehome

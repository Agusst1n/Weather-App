import React from 'react'
import Hero from '../../components/Hero/Hero'
import NextDays from '../../components/NextDays/NextDays'

import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home_container}>
        <Hero/>
        <NextDays/>
    </section>
  )
}

export default Home
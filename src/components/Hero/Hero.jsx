import React from 'react'

import styles from './Hero.module.css'

import LocationUser from '../LocationUser/LocationUser'
import NextHours from '../NextHours/NextHours'
import MoreLocations from '../MoreLocations/MoreLocations'



const Hero = () => {

  return (
    <section className={styles.hero}>
        <MoreLocations/>
        <LocationUser/>
        <NextHours/>
    </section>
  )
}

export default Hero
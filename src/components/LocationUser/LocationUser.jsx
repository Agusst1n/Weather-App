import React,{ useContext } from 'react'

import styles from './LocationUser.module.css'

import WeatherContext from '../../context/WeatherContext'
import InfoClima from '../InfoClima/InfoClima'

const LocationUser = () => {

  const {loading} = useContext(WeatherContext)
  
  return (
    <article className={styles.info_location}>

        {
          loading? <h1>Loading</h1> : <InfoClima/>
        }

    </article>
  )
}

export default LocationUser
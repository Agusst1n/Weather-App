import React,{ useContext } from 'react'
import FiveDaysContext from '../../context/FiveDaysContext'
import Hours from './Hours/Hours'

import styles from './NextHours.module.css'

const NextHours = () => {

  const {fiveHours} = useContext(FiveDaysContext)

  return (
    <section className={styles.nextHours_container}>
        {
            fiveHours.map((element, index)=> <Hours hours={element} key={index}/>)
        }
    </section>
  )
}

export default NextHours
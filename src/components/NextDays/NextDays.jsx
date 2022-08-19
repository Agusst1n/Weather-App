import React,{ useContext } from 'react'
import FiveDaysContext from '../../context/FiveDaysContext'
import Days from './Days/Days'

import styles from './NextDays.module.css'

const NextDays = () => {

  const {fiveDays} = useContext(FiveDaysContext)

  return (
    <section className={styles.nextDays_container}>

        {
            fiveDays.map((element, index)=><Days day={element} key={index}/>)
        }
    </section>
  )
}

export default NextDays
import React, { useState, useEffect,useContext } from 'react'
import WeatherContext from '../../../context/WeatherContext'

import { PropTypes } from "prop-types";
import {Link} from 'react-router-dom'

import styles from './Days.module.css'

const Days = (day) => {

  const [climate, setClimate] = useState('')

  const {popularLocations} = useContext(WeatherContext)


//   console.log(day.day, 'this day')

  let thisDay = new Date(day.day.dt_txt)
  let options = { weekday: 'long' }

  let clima = day.day.weather[0].main
  
  let Day = thisDay.toLocaleDateString("en-EN",options)


  const getClima = () =>{

    switch (clima) {
        case 'Thunderstorm':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425437/assets/icons8-cloud-lighting-unscreen_tyu3ap.gif')
            break;
        case 'Drizzle':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425183/assets/rain-unscreen_nl9upz.gif')
            break;
        case 'Rain':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425347/assets/icons8-aguacero-unscreen_kknwzk.gif')
            break;
        case 'Snow':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426074/assets/icons8-nieve-unscreen_wcfpth.gif')
            break;
        case 'Clear':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425518/assets/icons8-sol-unscreen_oho0qh.gif')
            break;
        case 'Atmosphere':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426407/assets/icons8-d-a-parcialmente-nublad-unscreen_rvxk48.gif')
            break;
        case 'Clouds':
            setClimate('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426407/assets/icons8-d-a-parcialmente-nublad-unscreen_rvxk48.gif')
            break;
        default:
            console.log(data);
    }
}

useEffect(()=>{
    getClima()
},[popularLocations, clima])


  return (
    <article className={styles.days_card}>
      <h4>{Day}</h4>
      <img src={climate} alt="" width={84}/>
      <Link to={"/details/"+day.day.dt} className={styles.next_day}>More details</Link>
    </article>
  )
}

Days.propTypes = {
  day: PropTypes.object,
}

export default Days
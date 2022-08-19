import React,{ useEffect,useState } from 'react'
import { PropTypes } from "prop-types";

import styles from './Hours.module.css'


const Hours = (element) => {

    const [climate, setClimate] = useState('')

    let data = element.hours
    let hour = element.hours.dt_txt.slice(10,-3)
    let clima = data.weather[0].main

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
    },[clima, climate])

  return (
    <article className={styles.hours_card}>
        <h4 className={styles.hour}>{hour}</h4>
        <img src={climate} alt="" width={44} className={styles.icon}/>
        <p className={styles.temperature}>{data.main.temp} ºC</p>
    </article>
  )
}

Hours.propTypes = {
    hours: PropTypes.object,
}

export default Hours
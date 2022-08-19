import React, { useState, useContext, useEffect } from 'react'

import styles from './DayDetails.module.css'

import FiveDaysContext from '../../context/FiveDaysContext'

import Hours from '../../components/NextHours/Hours/Hours'

import {Link,useParams} from 'react-router-dom'



const DayDetails = () => {

  const [main, setMain] = useState('')

  const {id} = useParams()

  const {fiveDays, data} = useContext(FiveDaysContext)

  //!Antes de mapear las fiveHours debo filtrar cuales son las 5 hs de mi dia
  //*Recortar con slice

  let AllDates = data.list
  
  let Data = fiveDays.filter(day => day.dt == id)
 
  let dayInfo = Data[0]

  let FechaActual = dayInfo?.dt_txt?.slice(0,10)

  let HorasFiltradas = AllDates?.filter(element=>element.dt_txt.slice(0,10) == FechaActual)

  console.log(HorasFiltradas )


  let weather = Data[0]?.weather[0]
  let clima = Data[0]?.weather[0]?.main
  //Date
  let thisDay = new Date(dayInfo?.dt_txt)
  let options = { weekday: 'long' }
  let dayName = thisDay.toLocaleDateString("en-EN",options)

const getGif = () =>{
    switch (Data[0]?.weather[0]?.main) {
        case 'Thunderstorm':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425437/assets/icons8-cloud-lighting-unscreen_tyu3ap.gif')
            break;
        case 'Drizzle':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425183/assets/rain-unscreen_nl9upz.gif')
            break;
        case 'Rain':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425347/assets/icons8-aguacero-unscreen_kknwzk.gif')
            break;
        case 'Snow':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426074/assets/icons8-nieve-unscreen_wcfpth.gif')
            break;
        case 'Clear':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660425518/assets/icons8-sol-unscreen_oho0qh.gif')
            break;
        case 'Atmosphere':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426407/assets/icons8-d-a-parcialmente-nublad-unscreen_rvxk48.gif')
            break;
        case 'Clouds':
            setMain('https://res.cloudinary.com/dcwoyu2zc/image/upload/v1660426407/assets/icons8-d-a-parcialmente-nublad-unscreen_rvxk48.gif')
            break;
        default:
            console.log(clima);
    }

}

useEffect(()=>{
    getGif()
},[clima])


  return (
    <section className={styles.details_section}>
        <Link to={'/'} className={styles.back_home}><ion-icon name="exit-outline"></ion-icon></Link>
        <article className={styles.dayDetails_container}>
            <h2 className={styles.name}>{dayName}</h2>
            <h4 className={styles.climate}>{weather? weather.description : <p>Loading</p>}</h4>
            <div className={styles.details_info}>
                <img src={main} alt="" width={100} className={styles.img}/>
                <h2>{dayInfo?.main.temp} ºC</h2>
                <div className={styles.main}>
                    <p><ion-icon name="water-outline"></ion-icon> Humedad: {dayInfo?.main?.humidity}%</p>
                    <p><ion-icon name="thermometer-outline"></ion-icon> Temp max: {dayInfo?.main?.temp_max}</p>
                    <p><ion-icon name="thermometer-outline"></ion-icon> Temp min: {dayInfo?.main?.temp_min}</p>
                    <p><ion-icon name="cloudy-outline"></ion-icon> Wind: {dayInfo?.wind?.speed} km/h</p>
                </div>
            </div>
        </article>
        <article className={styles.nextHours_container}>
            {
                HorasFiltradas?.map((element, index) => <Hours hours={element} key={index}/>)
            }
        </article>
    </section>
  )
}

export default DayDetails
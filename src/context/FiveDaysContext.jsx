import { useContext } from "react"
import { useEffect,useState,createContext } from "react"
import WeatherContext from "./WeatherContext"

const FiveDaysContext= createContext()

const FiveDaysProvider = ({ children }) => {

  const [data, setData] = useState([])
  const [fiveHours, setFiveHours] = useState([])
  const [fiveDays, setFiveDays] = useState([])

  const {latitude, longitude, popularLocations} = useContext(WeatherContext)



  const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?`
  const Key = `a234f3c687a31fdedd7f69b5239b815a`
  
  

  const URL = popularLocations ? `https://api.openweathermap.org/data/2.5/forecast?q=${popularLocations}&appid=${Key}` : `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${Key}&units=metric&lang=es`  

  const getData = async () =>{
    const res = await fetch(URL)
    const data = await res.json()

    setData(data)

    let fiveHours = data.list.slice(0,5)

    const FiveDays = data.list.filter((item,index)=> index === 7 || index === 15 || index === 23 || index === 31 || index === 39)

    setFiveDays(FiveDays)

    setFiveHours(fiveHours)

  }


  useEffect(()=>{
    getData()
  },[latitude,longitude, popularLocations])

  return (
    <FiveDaysContext.Provider
      value={{data, fiveHours, fiveDays}}
    >
      {children}
    </FiveDaysContext.Provider>
  )
}

export { FiveDaysProvider }

export default FiveDaysContext
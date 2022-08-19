import { createContext, useEffect, useState } from 'react'

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {

	const [popularLocations, setPopuparLocations] = useState('')
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')


	const [loading, setLoading] = useState(false)

	const getCoords = () =>{
			
            navigator.geolocation.getCurrentPosition((position) => {

				let lat = position.coords.latitude

				let long = position.coords.longitude

				getLocationUser(lat,long)

            },(error)=>{
				console.log(error);
			},
			{
				enableHighAccuracy: true
			})
	}
	
    
	const [locationInfo, setLocationInfo] = useState([])
	const [weather, setWeather] = useState({})
	const [main, setMain] = useState('')
	
	
	const key = `a234f3c687a31fdedd7f69b5239b815a`
	const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

	
	
	
	const getLocationUser = async (lat, long) => {

		const URL = popularLocations ? `https://api.openweathermap.org/data/2.5/weather?q=${popularLocations}&appid=${key}&units=metric` : `${BASE_URL}lat=${lat}&lon=${long}&appid=${key}&lang=es&units=metric`
		
		setLoading(true)

		const res = await fetch(URL)
		
		const data = await res.json()
		
		setLocationInfo(data)

		setWeather(data.weather[0])

		setLatitude(data.coord.lat)
		setLongitude(data.coord.lon)

		setLoading(false)

		getGif(data.weather[0])
		
	}

	const getGif = (main) =>{
		switch (main.main) {
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
                console.log(main);
        }

	}
	
	useEffect(() => {

		getCoords()

	}, [popularLocations])


	return (
		<WeatherContext.Provider value={{locationInfo,weather,main, loading, setPopuparLocations, latitude, longitude}}>{children}</WeatherContext.Provider>
	)
}

export { WeatherProvider }

export default WeatherContext

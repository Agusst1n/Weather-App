import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiveDaysProvider } from './context/FiveDaysContext'
import { WeatherProvider } from './context/WeatherContext'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
      <FiveDaysProvider>
        <App />
      </FiveDaysProvider>
    </WeatherProvider>
  </React.StrictMode>
)

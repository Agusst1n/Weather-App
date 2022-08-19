import './App.css'
// import Hero from './components/Hero/Hero'
// import NextDays from './components/NextDays/NextDays'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import DayDetails from './Pages/DayDetails/DayDetails'


function App() {

	return (
		<section className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/details/:id' element={<DayDetails/>}/>
				</Routes>
			</BrowserRouter>
		</section>
	)
}

export default App

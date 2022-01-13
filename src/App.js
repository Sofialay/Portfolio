import React, { useState } from 'react'
import FirstPage from './components/FirstPage/FirstPage'
import NavBar from './components/NavBar/NavBar'
import Technologies from './components/Technologies/Technologies'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import ThemeContext from './context/useContext'
import './App.scss'
import {
	BrowserRouter, 
} from 'react-router-dom'

function App() {
	const [theme, setTheme] = useState('Classic')

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<section 
				className='App bg font-color' 
				data-theme={theme}
			>
				<BrowserRouter>
					<div className='bg font-color' data-theme={theme}>
						<NavBar />
						<FirstPage />
						<AboutMe />
						<Technologies/>
						<Experience/>
						<Contact />
					</div>
				</BrowserRouter>
			</section> 
		</ThemeContext.Provider>
	)
}

export default App

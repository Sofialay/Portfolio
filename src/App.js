import React, { useState } from 'react'
import FirstPage from './components/FirstPage/FirstPage'
import NavBar from './components/NavBar/NavBar'
import Education from './components/Education/Education'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import ThemeContext from './context/useContext'
import './App.scss'
import {
	BrowserRouter, 
	Switch, 
	Route 
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
						<NavBar/>
						<Switch>
						<React.Fragment>
							<Route exact path="/" component={FirstPage} />
							<div>
								<Route exact path="/education" component={Education} />
								<Route exact path="/aboutme" component={AboutMe} />
								<Route exact path="/contact" component={Contact} />
							</div>
							</React.Fragment>
						</Switch>
				</BrowserRouter>
			</section> 
		</ThemeContext.Provider>
	)
}

export default App

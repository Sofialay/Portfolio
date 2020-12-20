import React from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import NavBar from './components/NavBar/NavBar';
import Education from './components/Education/Education';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import './App.scss';
import {
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment> 
  );
}

export default App;

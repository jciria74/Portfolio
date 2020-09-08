import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './Sections/Home';
import Contact from './Sections/Contact';
import Projects from './Sections/Projects';
import UpperMenu from './Menu/UpperMenu';
import MyContext from './Context/Context';
import SideMenu from './Menu/SideMenu';
import backgroundImg from './img/fondoAboutMe.png';


function App() {

  const handleScroll = () => {
    const position = window.pageYOffset + window.innerHeight/1.5;
    const offsetTopProjects = (document.getElementById('projects') || {}).offsetTop;
    const setOffsetTopContact = (document.getElementById('contact') || {}).offsetTop;

    if (position >= offsetTopProjects) {
      if (position >= setOffsetTopContact) {
        setState({ ...state, menuItemSelected: 'contact', topScroll: window.pageYOffset });
      } else {
        setState({ ...state, menuItemSelected: 'projects', topScroll: window.pageYOffset });
      }
    } else {
      setState({ ...state, menuItemSelected: 'home', topScroll: window.pageYOffset });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // FIN Para ver posiciones del scroll

  //Todo nuestro estado con hooks
  const [state, setState] = useState({
    menuItemSelected: 'home',
    topScroll: window.pageYOffset,
    language: 'español'
  })
  //Para importar nuestro estado + setEstado con MyContext
  const allContext = { state, setState }

  return (
    <MyContext.Provider value={allContext}>
      <div className="App" >
        <div className="container-fluid">
          
          <div className="backgroundUpperMenu">
            <div className="upperMenu justifyCenter" >
              <UpperMenu />
            </div>
          </div>
          <div>
            <div className="row">
              <img id='contacting' src={backgroundImg} alt='backgroundContact' />
              <div className="col-sm-1 justifyCenter">
                <SideMenu />
              </div>
              <div className="col-12 col-sm-11" >
                {/* Secciones a las que hacer scroll */}
                <div id="home" className="sections">
                  <Home />
                </div>
                <div id="projects" className="sections">
                  <Projects />
                </div>
                <div id="contact" className="sections">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>

  );
}

export default App;

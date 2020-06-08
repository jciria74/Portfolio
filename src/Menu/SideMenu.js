import React, { useContext } from 'react';
import './SideMenu.scss';
import MyContext from '../Context/Context';

const UpperMenu = () => {

    //Nuestro contexto
    const allState = useContext(MyContext);
    const state = allState.state;

    //Hacemos scroll on click hasta el div por su ID
    const scrollTo = (titleItem) => {
        document.getElementById(titleItem).scrollIntoView({ block: "start", behavior: 'smooth' });
    }

    return (
        <div className="menuCirculos">
            <div className="circle justifyCenter alignCenter" onClick={() => scrollTo('home')}>
                {state.menuItemSelected === 'home' ? <div className="innerCircle"></div> : undefined}
            </div>
            <div className="circle justifyCenter alignCenter" onClick={() => scrollTo('projects')}>
                {state.menuItemSelected === 'projects' ? <div className="innerCircle"></div> : undefined}
            </div>
            <div className="circle justifyCenter alignCenter" onClick={() => scrollTo('contact')}>
                {state.menuItemSelected === 'contact' ? <div className="innerCircle"></div> : undefined}
            </div>
        </div>
    )
}

export default UpperMenu;
import React, { useContext } from 'react';
import Icons from '../Icons/Icons';
import MyContext from '../Context/Context';
import './UpperMenu.scss';
import banderaEspañola from '../img/Idiomas/BanderaEspaña.png';
import banderaInglesa from '../img/Idiomas/banderaInglaterra.png';
import getText from '../Texts/Texts';

const UpperMenu = () => {

    const allState = useContext(MyContext);
    const state = allState.state;
    const setState = allState.setState;

    //Hacemos scroll on click hasta el div por su ID
    const scrollTo = (titleItem) => {
        document.getElementById(titleItem).scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    //Seleccionamos idioma
    const changeLanguage=(idioma)=>{
        setState({...state, language: idioma})
    }

    return (
        <div className="row menu">
            <div>
                <p onClick={() => scrollTo('home')} className={state.menuItemSelected === 'home' ? 'menuSelected' : undefined}><span className="menuIcons">{state.menuItemSelected === 'home' ? Icons.iconHomeSelected : Icons.iconHome}</span>{getText(state.language, 'menuHome')}</p>
                <div className={state.menuItemSelected === 'home' ? "underline" : undefined}></div>
            </div>
            <div>
                < p onClick = {
                    () => scrollTo('projects')
                }
                className = {
                    state.menuItemSelected === 'projects' ? 'menuSelected' : undefined
                } > < span className = "menuIcons" > {
                    state.menuItemSelected === 'projects' ? Icons.iconProjectsSelected : Icons.iconProjects
                    } </span>{getText(state.language, 'menuProyects')}</p>
                <div className={state.menuItemSelected === 'projects' ? "underline" : undefined}></div>
            </div>
            <div>
                <p onClick={() => scrollTo('contact')} className={state.menuItemSelected === 'contact' ? 'menuSelected' : undefined}><span className="menuIcons">{state.menuItemSelected === 'contact' ? Icons.iconAboutMeSelected : Icons.iconAboutMe}</span>{getText(state.language, 'menuContact')}</p>
                <div className={state.menuItemSelected === 'contact' ? "underline" : undefined}></div>
            </div>
            <div>
                <img className={state.language ==='español' ? 'idiomasSelected': 'idiomas'} src={banderaEspañola} alt='español' 
                onClick={() => changeLanguage('español')}
                />
                <img className={state.language ==='english' ? 'idiomasSelected': 'idiomas'} src={banderaInglesa} alt='inglés' 
                onClick={() => changeLanguage('english')}
                />
            </div>
        </div>
    )
}

export default UpperMenu;
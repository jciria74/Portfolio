import React, { useContext } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';
//All tecnologies
import iconAdobeXd from '../img/logos/adobeXd.png';
import iconAdobeIllustrator from '../img/logos/adobeIllustrator.png';
import iconBootstrap from '../img/logos/bootstrap.png';
import iconCss from '../img/logos/css.png';
import iconFigma from '../img/logos/figma.png';
import iconFontAwesome from '../img/logos/fontAwesome.png';
import iconGit from '../img/logos/git.png';
import iconGitHub from '../img/logos/gitHub.png';
import iconHtml from '../img/logos/html.png';
import iconJavaScript from '../img/logos/javaScript.png';
import iconMySql from '../img/logos/mySql.png';
import iconNodeJs from '../img/logos/NodeWhiteJS.png';
import iconPhotoshop from '../img/logos/photoshop.png';
import iconReact from '../img/logos/react.png';
import iconSass from '../img/logos/sass.png';
import trello from '../img/logos/trello.png';
import jiraConfluence from '../img/logos/jiraConfluence.png';
//Imagenes de proyectos
import Nonogram from '../img/Projects/nonogramEditada.jpg';
import OneToFifty from '../img/Projects/oneToFiftyEditada.jpg';
import MasterMindQuiz from '../img/Projects/masterQuizEditada.png';
import LaPajita from '../img/Projects/laPajitaEditada.jpg';
import PanicFridge from '../img/Projects/PanicFridgeEditada.jpg';
import OpenTriviaJavi from '../img/Projects/openTriviaJaviEditada.jpg';
import LaVanguardia from '../img/Projects/LaVanguardiaEditada.png';
//textos
import getText from '../Texts/Texts';
import MyContext from '../Context/Context';

const Projects = () => {

    const allState = useContext(MyContext);
    const state = allState.state;

    //Para personalizar texto 'description' de las cards:
    //--> texto destacado: <span className='textoDestacado'>rompecabezas</span>
    //--> imagenes dentro del texto: <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />

    return (
        <div className="Project">
            <div className="row allProjects">
                {/* ----------------- Portal de juegos La Vanguadia ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconNodeJs, iconMySql, iconHtml, iconSass, iconCss,iconBootstrap, jiraConfluence, iconGit, iconFontAwesome, iconAdobeIllustrator, iconGitHub,]}
                    title={getText(state.language, 'LaVanguardiaTitle')}
                    description={
                        <p>
                            {getText(state.language, 'LaVanguardia1')}
                            <span className='textoDestacado'>{getText(state.language, 'LaVanguardia2')} </span>
                            {getText(state.language, 'LaVanguardia3')}
                            <span className='textoDestacado'>{getText(state.language, 'LaVanguardia4')} </span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            <span className='textoDestacado'>{getText(state.language, 'LaVanguardia5')} </span>
                            <img className="imgLogo" src={iconNodeJs} alt={`iconNodeJs`} style={{ height: '32px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'LaVanguardia6')}
                            <span className='textoDestacado'>{getText(state.language, 'LaVanguardia7')} </span>
                            <img className="imgLogo" src={iconMySql} alt={`iconMySql`} style={{ height: '25px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'LaVanguardia8')}
                        </p>
                    }
                    img={LaVanguardia}
                    gitHubLink={'https://github.com/LaVanguardia/LaVanguardia-Fullstack'}
                    projectLink={'https://amazing-agnesi-bd2892.netlify.app'}
                />
                {/* ----------------- PanicFridge ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, trello, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma]}
                    title={getText(state.language, 'PanicFridgeTitle')}
                    description={
                        <p>
                            {getText(state.language, 'PanicFridge1')}
                            <span className='textoDestacado'>{getText(state.language, 'PanicFridge2')}</span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'PanicFridge3')}
                            <span className='textoDestacado'>{getText(state.language, 'PanicFridge4')}</span>
                        </p>
                    }
                    img={PanicFridge}
                    gitHubLink={'https://github.com/PanicFridge/panic_fridge'}
                    projectLink={'https://panicfridge.netlify.app/'}
                />
                {/* ----------------- La Pajita startup ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconNodeJs, iconMySql, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, trello, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma, iconAdobeXd]}
                    title={getText(state.language, 'LaPajitaTitle')}
                    description={
                        <p>
                            {getText(state.language, 'LaPajita1')}
                            <span className='textoDestacado'>{getText(state.language, 'LaPajita2')}</span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'LaPajita3')}
                            <span className='textoDestacado'>{getText(state.language, 'LaPajita4')}</span>
                            <img className="imgLogo" src={iconNodeJs} alt={`iconNodeJs`} style={{ height: '32px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'LaPajita5')}
                        </p>
                    }
                    img={LaPajita}
                    gitHubLink={'https://github.com/LaPajita'}
                    projectLink={'https://lapajita-waiting-list.netlify.app/'}
                />
                {/* ----------------- Nonograma ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub]}
                    title={getText(state.language, 'NonogramTitle')}
                    description={
                        <p>
                            {getText(state.language, 'Nonogram1')}
                            <span className='textoDestacado'> {getText(state.language, 'Nonogram2')}</span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'Nonogram3')}
                            <span className='textoDestacado'> {getText(state.language, 'Nonogram4')} </span>
                            {getText(state.language, 'Nonogram5')
                            }
                        </p>
                    }
                    img={Nonogram}
                    gitHubLink={'https://github.com/wcsGames/nonograma'}
                    projectLink={'https://nonogram-game.netlify.app'}
                />
                {/* ----------------- OneToFifty ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub]}
                    title={getText(state.language, 'OneToFiftyTitle')}
                    description={
                        <p>
                            {getText(state.language, 'OneToFifty1')}
                            <span className='textoDestacado'>{getText(state.language, 'OneToFifty2')} </span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'OneToFifty3')}
                            <span className='textoDestacado'>{getText(state.language, 'OneToFifty4')} </span>
                            {getText(state.language, 'OneToFifty5')}
                        </p>
                    }
                    img={OneToFifty}
                    gitHubLink={'https://github.com/wcsGames/oneToFifty'}
                    projectLink={'https://onetofifty.netlify.app'}
                />
                {/* ----------------- MasterMind Quizz ---------------------*/}
                <ProjectCard
                    tecnologies={[iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, trello, iconAdobeIllustrator, iconGitHub, iconAdobeXd, iconPhotoshop]}
                    title={getText(state.language, 'MasterMindQuizzTitle')}
                    description={
                        <p>
                            {getText(state.language, 'MasterMindQuizz1')}
                            <span className='textoDestacado'>{getText(state.language, 'MasterMindQuizz2')}</span>
                            <img className="imgLogo" src={iconJavaScript} alt={`iconJavaScript`} style={{ height: '14px', margin: '0 4px 2px 4px' }} />
                            <span className='textoDestacado'>{getText(state.language, 'MasterMindQuizz3')} </span>
                            {getText(state.language, 'MasterMindQuizz4')}
                            <span className='textoDestacado'>{getText(state.language, 'MasterMindQuizz5')}</span>
                            
                            {getText(state.language, 'MasterMindQuizz6')}
                        </p>
                    }
                    img={MasterMindQuiz}
                    gitHubLink={'https://github.com/mastermindQuiz'}
                    projectLink={'https://mastermind-wcs.netlify.app/'}
                />
                {/* ----------------- OpenTrivia ---------------------*/}
                <ProjectCard
                    tecnologies={[iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma]}
                    title={getText(state.language, 'OpenTriviaTitle')}
                    description={
                        <p>
                            {getText(state.language, 'OpenTrivia1')}
                            <span className='textoDestacado'>{getText(state.language, 'OpenTrivia2')}</span>
                            <img className="imgLogo" src={iconReact} alt={`iconReact`} style={{ height: '16px', margin: '0 4px 2px 4px' }} />
                            {getText(state.language, 'OpenTrivia3')}
                            <span className='textoDestacado'>{getText(state.language, 'OpenTrivia4')}</span>
                            {getText(state.language, 'OpenTrivia6')}
                        </p>
                    }
                    img={OpenTriviaJavi}
                    gitHubLink={'https://github.com/jciria74/trivial-game'}
                    projectLink={'https://brave-wiles-41ec89.netlify.app'}
                />
            </div>
        </div>
    )
}

export default Projects;
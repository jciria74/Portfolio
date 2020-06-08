import React, {useContext} from 'react';
import './ProjectCard.scss';
import Icons from '../Icons/Icons';
//textos
import getText from '../Texts/Texts';
import MyContext from '../Context/Context';


const ProjectCard = (props) => {

    //Contexto
     const allState = useContext(MyContext);
     const state = allState.state;
    //Logotipos de tecnologias usadas
    const tecnologies = props.tecnologies;
    //Abrir link en new window
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="ProjectCard col-12">
            <div className="row titleAndtecno">
                <div className="col-12 col-lg-4 title">{props.title}</div>
                <div className="col-12 col-lg-8 colLogos">
                    {tecnologies.map(tec => <img className="imgLogo" src={tec} alt={`${tec}`} />)}
                </div>
            </div>
            <div className="row photoAndDescription">
                <div className="col-12 col-sm-4 photo" style={{backgroundImage:`url(${props.img})`}}>
                </div>
                <div className="col-12 col-sm-8 text">
                    <div className="row description">
                        <p>{getText(state.language, 'ProjectDescription')}</p>
                    </div>
                    <div className="row">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <hr className="hr"/>
            <div className="row links">
                <div className="col-12 col-sm-6 eachLink" onClick={() => openInNewTab(props.gitHubLink)}>
                    <span>{Icons.iconGitHub}</span>
                    <p>{getText(state.language, 'ProjectRepository')}</p>
                </div>
                <div className="col-12 col-sm-6 eachLink" onClick={() => openInNewTab(props.projectLink)}>
                    <span>{Icons.iconShowProject}</span>
                    <p>{getText(state.language, 'ProjectLink')}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
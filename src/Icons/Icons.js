import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptopCode, faUserAstronaut, faMapSigns, faAt, faFileDownload, faDesktop} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

// ICONOS
const iconHome = <FontAwesomeIcon icon={faHome} color = 'white' />
const iconProjects = <FontAwesomeIcon icon={faLaptopCode} color = 'white' />
const iconAboutMe = <FontAwesomeIcon icon={faUserAstronaut} color = 'white' />
const iconHomeSelected = <FontAwesomeIcon icon={faHome} color ='#F73554' />
const iconProjectsSelected = <FontAwesomeIcon icon={faLaptopCode} color ='#F73554' />
const iconAboutMeSelected = <FontAwesomeIcon icon={faUserAstronaut} color ='#F73554' />
const iconDirection = <FontAwesomeIcon icon={faMapSigns} color ='white' size='1x'/>
const iconEmail = <FontAwesomeIcon icon={faAt} color ='white' size='1x'/>
const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} color='white' size='2x' />
const iconGitHub = <FontAwesomeIcon icon={faGithub} color='white' size='2x' />
const iconCurriculum = <FontAwesomeIcon icon={faFileDownload} color='white' size='2x' />
const iconShowProject = <FontAwesomeIcon icon={faDesktop} color='white' size='2x' />

export default {
    iconHome,
    iconProjects,
    iconAboutMe,
    iconHomeSelected,
    iconProjectsSelected,
    iconAboutMeSelected,
    iconDirection,
    iconEmail,
    iconLinkedin,
    iconGitHub,
    iconCurriculum,
    iconShowProject
}






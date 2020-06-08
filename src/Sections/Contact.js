import React, { useEffect, useContext, useState } from 'react';
import useTyped from "use-typed";
// import backgroundImg from '../img/fondoAboutMe.png';
import './Contact.scss';
import imgPortrait from '../img/Portrait/Perfil CV.jpg';
import Icons from '../Icons/Icons';
import MyContext from '../Context/Context';
import curriculum from '../img/CV/CV_Javier_Sanchez.pdf'
//textos
import getText from '../Texts/Texts';

const Contact = () => {
    
    //Context
    const allState = useContext(MyContext);
    const state = allState.state;
    
    //Inicio typed
    const typedSecuence = React.useRef(null);
    const demoTyped = useTyped(typedSecuence, {
        strings: getText(state.language, 'DemoTypedText'),
        typeSpeed: 80,
        backSpeed: 30,
    });
    //FIN typed (+parte en useEffect)

    useEffect(() => {
        setInterval(() => {
            document.getElementById('resetButton').click()
        }, 19000)

        //Get random color every sec
        //     setInterval(() => {
        //         const color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        //         document.getElementById('changeColor').style.backgroundColor = color;
        //     }, 3000)
    }, [])

    //Abrir link en new window
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="Contact container-fluid">
            <div className="row justifyCenter alignCenter ">
                <div div className="col-12 col-md-5 fotoContainer justifyCenter">
                    <img className="foto" src={imgPortrait} alt="portrait" />
                </div>
                <div className="col-12 col-md-7 info">
                    <div className="row name">
                        <p>Javier Sánchez Ciria</p>
                    </div>
                    <div className="row demo">
                        <div className="demo-typed">
                            <span ref={typedSecuence} />
                        </div>
                        <button id="resetButton" onClick={() => demoTyped.reset()} style={{ display: 'none' }}>Reset invisible button</button>
                    </div>
                    <div className="row infoDetail alignCenter">
                        <span className="icons">{Icons.iconDirection}</span>
                        <p> {getText(state.language, 'Contactdirection')}</p>
                    </div>
                    <div className="row infoDetail alignCenter">
                        <span className="icons">{Icons.iconEmail}</span>
                        <p>jciria74@gmail.com</p>
                    </div>
                    <div className="row linkedinGitHub ">
                        <div className="col-6 alignCenter justifyCenter" onClick={() => openInNewTab("https://www.linkedin.com/in/javierciria74/?trk=public-profile-join-page")}>
                            <span>{Icons.iconLinkedin}</span>
                            <p>Linkedin</p>
                        </div>
                        <div className="col-6 alignCenter justifyCenter" onClick={() => openInNewTab("https://github.com/jciria74")}>
                            <span>{Icons.iconGitHub}</span>
                            <p>GitHub</p>
                        </div>
                    </div>
                    <a href={curriculum} download>
                        <div className="row curriculum">
                            {Icons.iconCurriculum}<p>{getText(state.language, 'ContactCV')}</p>
                        </div>
                    </a>
                    {/* <div className="row" id='changeColor' style={{ height: '30px', width: '30px' }}>dd</div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact;
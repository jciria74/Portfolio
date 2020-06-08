import React, { useContext } from 'react';
import './Home.scss';
import MyContext from '../Context/Context';
import imgBackgroundHome from '../img/backgroundHome5.png';

const Home = () => {

    const allState = useContext(MyContext);
    const state = allState.state;


    return (
        <div className="Home">
            <div className="container">
                <div className="backgroundHome">
                    <img src={imgBackgroundHome} alt="backgroundImg" />
                </div>
                {
                    (!document.getElementById('displayAnimation') || document.getElementById('displayAnimation').offsetTop > state.topScroll) &&
                    <div className="box row">
                        <div className=" col-12 title">
                            <span className="block"></span>
                            <h1>Javier Sánchez<span></span></h1>
                        </div>
                        <div className=" col-12 role">
                            <div className="block"></div>
                            <p>Front-end developer</p>
                        </div>
                        <div id='displayAnimation'></div>
                    </div>}
            </div>
        </div>
    )
}

export default Home;
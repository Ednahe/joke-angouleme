import React, {useState, useEffect} from "react";
import logoAngouleme from "./../images/logo-angouleme.jpg";
import house from './../images/house.svg';
import loupe from './../images/loupe.svg';
import arrowDown from './../images/angle-down.svg';
import burger from './../images/burger.svg';


const Header = () => {

    return <header>
        <div className="container-header">
            <a href="#">
                <img src={logoAngouleme} alt="logo de la ville d'angoulême" />
            </a>
        </div>
        <div className='container-nav'>
            <div className="contain-nav">
                <div className="container-navicon">
                    <img src={house} className="navicon" alt="Icone de maison" />
                </div>
                <div className="burger-menu">
                    <img src={burger} alt="Menu burger" id="burger"/>
                </div>
                <nav>
                    <div className="container-list">
                        <ul>
                            <li className="li-nav">
                                <a href="#">Grand Angoulême
                                    <div className="contain-arrow-down">
                                        <img className="arrow-down" src={arrowDown} alt="icone pointant vers le bas" />
                                    </div>
                                </a>
                            </li>
                            <li className="li-nav">
                                <a href="#">Projet de territoire
                                    <div className="contain-arrow-down">
                                        <img className="arrow-down" src={arrowDown} alt="icone pointant vers le bas" />
                                    </div>
                                </a>
                            </li>
                            <li className="li-nav">
                                <a href="#">Vivre et habiter
                                    <div className="contain-arrow-down">
                                        <img className="arrow-down" src={arrowDown} alt="icone pointant vers le bas" />
                                    </div>
                                </a>
                            </li>
                            <li className="li-nav">
                                <a href="#">Sortir & Découvrir
                                    <div className="contain-arrow-down">
                                        <img className="arrow-down" src={arrowDown} alt="icone pointant vers le bas" />
                                    </div>
                                </a>
                            </li>
                            <li className="li-nav">
                                <a href="#">Entreprendre et travailler
                                    <div className="contain-arrow-down">
                                        <img className="arrow-down" src={arrowDown} alt="icone pointant vers le bas" />
                                    </div>
                                </a>
                            </li>
                            <li className="li-nav">
                                <a href="#">Presse</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-navicon container-loupe">
                    <img src={loupe} className="navicon loupe" alt="icone de loupe" />
                </div>
            </div>
        </div>
    </header>
}

export default Header;
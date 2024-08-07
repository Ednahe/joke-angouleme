import React from "react";
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import portfolio from '../images/portfolio.svg';

const Footer = () => {

    return <footer>
        <div className="container-footer">
            <p>Ceci est un site parodique fait avec ❤️</p>
            <span id="barre"></span>
            <div className="contain-logo-pro">
                <a className="contain-pro" href="https://www.linkedin.com/in/emmanuel-donahue/" rel="noreferrer" target="_blank">
                    <img src={linkedin} alt="logo linkedin" />
                </a>
                <a className="contain-pro" href="https://github.com/Ednahe" rel="noreferrer" target="_blank">
                    <img src={github} alt="logo github" />
                </a>
                <a className="contain-pro" href="https://portfolio-emmanuel.netlify.app/" rel="noreferrer" target="_blank">
                    <img src={portfolio} alt="logo portfolio" />
                </a>
            </div>
        </div>
    </footer>
}

export default Footer;
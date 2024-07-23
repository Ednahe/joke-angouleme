import React from 'react';
import pub from './../images/achète.gif';

const Pub = () => {

    const jokePub = () => {
        alert('Et mes revenus ? Et mon argent ? Tu y penses espèce de petit égoiste è__é');
    }

    return <section className='section-pub'>
        <div className="container-pub">
            <img src={pub} alt="gif achète ma merde" />
            <img src={pub} alt="gif achète ma merde" />
            <img src={pub} alt="gif achète ma merde" />
            <img src={pub} alt="gif achète ma merde" />
        </div>
        <div className='joke-pub' onClick={jokePub}>Masquer la publicité</div>
    </section>
}

export default Pub;
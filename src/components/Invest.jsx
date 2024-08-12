import React, { useState, useEffect } from 'react';
import investisseur from '../images/investisseur.jpg'
import angel from '../images/ange.png';
import ReactConfetti from 'react-confetti';

const Invest = ({investSubmit}) => {
    const [options1, setOptions1] = useState('');
    const [options2, setOptions2] = useState('');
    const [options3, setOptions3] = useState('');
    const [confetti, setConfetti] = useState(false);
    const [numberConfetti, setNumberConfetti] = useState(200);
    const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: document.documentElement.scrollHeight});

    const detectSize = () => {
        setWindowDimension({width: window.innerWidth, height: document.documentElement.scrollHeight});
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        window.addEventListener('scroll', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
            window.removeEventListener('scroll', detectSize);
        }
    }, [windowDimension]);

    const showConfetti = () => {
        setConfetti(true);
        setTimeout(() => {
            setNumberConfetti(150);
        }, 1000);
        setTimeout(() => {
            setNumberConfetti(100);
        }, 2000);
        setTimeout(() => {
            setNumberConfetti(50);
        }, 3000);
        setTimeout(() => {
            setNumberConfetti(0);
        }, 4000);
    }

    const selectOption1 = (e) => {
        setOptions1(e.target.value);
    }

    const selectOption2 = (e) => {
        setOptions2(e.target.value);
    }

    const selectOption3 = (e) => {
        setOptions3(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        investSubmit([options1, options2, options3]);
    }

    return <>
    <section className="container-invest">
        <h2>Portrait sur nos investisseurs</h2>
        <p>C'est grâce à leur courage et à leur audacieuse prise de risque que vous avez la chance d'avoir un emploi, petits privilégiés que vous êtes.</p>
        <div className="contain-img">
            <div className="contain-angel">
                <img src={angel} alt="petit ange" className="angel left-angel" />
                <img src={angel} alt="petit ange" className="angel right-angel reverse-angel" />
            </div>
            <img src={investisseur} alt="Portrait d'un investisseur courageux" className='img-invest' onAnimationEnd={showConfetti}/>
            {confetti && < ReactConfetti width={windowDimension.width} height={windowDimension.height} tweenDuration={1000} numberOfPieces={numberConfetti}/>}
        </div>
        <div className="contain-input-invest">
            <div className="contain-select">
                <label>Diriez vous de nos investisseurs qu'ils sont : </label>
                <select id="select1" value={options1} onChange={selectOption1}>
                    <option value="courageux">Courageux</option>
                    <option value="bienveillant">Bienveillant</option>
                    <option value="altruiste">Altruiste</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Diriez vous de leur rémunération doit augmenter de : </label>
                <select id="select2" value={options2} onChange={selectOption2}>
                    <option value="30%">30%</option>
                    <option value="40%">40%</option>
                    <option value="50%">50%</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Vous aimeriez remercier nos investisseurs car : </label>
                <select id="select3" value={options3} onChange={selectOption3}>
                    <option value="grâce à eux vous avez un emploi et une dignité">Grâce à eux j'ai un emploi et une dignité</option>
                    <option value="sinon vous seriez un cassos au rsa">Sinon je serais un cassos au rsa</option>
                    <option value="autrement vous passeriez vos journées à vous alcooliser et à ne rien faire">Autrement je passerais mes journées à m'alcooliser et à ne rien faire</option>
                </select>
            </div>
        </div>
    </section>
    <button type='button' onClick={submit}>Valider</button>
    </>
}

export default Invest;
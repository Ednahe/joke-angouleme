import React, { useState } from 'react';
import investisseur from '../images/investisseur.jpg'

const Invest = ({investSubmit}) => {
    const [options1, setOptions1] = useState('');
    const [options2, setOptions2] = useState('');
    const [options3, setOptions3] = useState('');

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
        investSubmit();
    }

    return <>
    <div className="container-invest">
        <h2>Portrait sur nos investisseurs</h2>
        <p>C'est grâce à leur courage et à leur audacieuse prise de risque que vous avez la chance d'avoir un emploi, petits privilégiés que vous êtes.</p>
        <div className="contain-img">
            <img src={investisseur} alt="Portrait d'un investisseur courageux" className='img-invest' />
        </div>
        <div className="contain-input-invest">
            <div className="contain-select">
                <label>Diriez vous de nos investisseurs qu'ils sont : </label>
                <select id="select1" value={options1} onChange={selectOption1}>
                    <option value="1">Courageux</option>
                    <option value="2">Bienveillant</option>
                    <option value="3">Altruiste</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Diriez vous de leur rémunération doit augmenter de : </label>
                <select id="select2" value={options2} onChange={selectOption2}>
                    <option value="4">30%</option>
                    <option value="5">40%</option>
                    <option value="6">50%</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Diriez vous de nos investisseurs qu'ils sont : </label>
                <select id="select3" value={options3} onChange={selectOption3}>
                    <option value="7">bleu</option>
                    <option value="8">rouge</option>
                    <option value="9">vert</option>
                </select>
            </div>
        </div>
    </div>
    <button type='button' onClick={submit}>Valider</button>
    </>
}

export default Invest;
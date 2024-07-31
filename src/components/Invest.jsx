import React, { useState } from 'react';
import investisseur from '../images/investisseur.jpg'

const Invest = ({investSubmit}) => {
    const [options, setOptions] = useState('');

    const selectOption = (e) => {
        setOptions(e.target.value);
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
                <select id="select1" value={options} onChange={selectOption}>
                    <option value="1">Courageux</option>
                    <option value="2">Bienveillant</option>
                    <option value="3">Altruiste</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Diriez vous de leur rémunération doit augmenter de : </label>
                <select id="select2" value={options} onChange={selectOption}>
                    <option value="4">30%</option>
                    <option value="5">40%</option>
                    <option value="6">50%</option>
                </select>
            </div>
            <div className="contain-select">
                <label>Diriez vous de nos investisseurs qu'ils sont : </label>
                <select id="select3" value={options} onChange={selectOption}>
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
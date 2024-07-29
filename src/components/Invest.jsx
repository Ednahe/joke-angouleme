import React, { useState } from 'react';
import investisseur from '../images/investisseur.jpg'

const Invest = () => {
    const [options, setOptions] = useState('');

    const selectOption = (e) => {
        setOptions(e.target.value);
    }

    return <div className="container-invest">
        <h2>Portrait sur nos investisseurs</h2>
        <p>C'est grâce à leur courage et à leur audacieuse prise de risque que vous avez la chance d'avoir un emploi, petits privilégiés que vous êtes.</p>
        <div className="contain-img">
            <img src={investisseur} alt="Portrait d'un investisseur courageux" className='img-invest' />
        </div>
        <div className="contain-input-invest">
            <label>test :</label>
            <select id="select" value={options} onChange={selectOption}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
            </select>
        </div>
    </div>
}

export default Invest;
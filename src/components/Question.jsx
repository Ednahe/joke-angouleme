import React, { useState } from "react";

const Question = () => {

    const submit = (e) => {
        e.preventDefault();
        console.log('question soumis');
    }

    return <div>
        <h4>D'une manière générale vous trouvez que les ouvriers de la dechetterie : (plusieurs choix possible)</h4>
        <div className="container-question">
            <input type="checkbox" />
            <label >Sont trop nombreux.</label>
        </div>
        <div className="container-question">
            <input type="checkbox" />
            <label >Sont trop payés.</label>
        </div>
        <div className="container-question">
            <input type="checkbox" />
            <label >Ne travaillent pas assez.</label>
        </div>
        <button type="button" onClick={submit}>Valider</button>
    </div>
}

export default Question;
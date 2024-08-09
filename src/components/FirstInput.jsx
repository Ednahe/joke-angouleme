import React from "react";

const FirstInput = ({textUser}) => {

    const noSpace = (e) => {
        if (e.target.value.includes(' ')) {
            e.target.value = e.target.value.replace(/\s/g, "");
        }
        textUser(e);
    }

    return <>
            <div className="contain-first-input">
                <label>Veuillez entrer votre matricule</label>
                <input className="first-input" type="text" required onChange={noSpace}/>
                <button id='first-submit' type='submit'>Envoyer</button>
            </div>
    </>
}

export default FirstInput;
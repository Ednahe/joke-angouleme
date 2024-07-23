import React from "react";

const FirstInput = ({textUser}) => {

    return <>
            <div className="contain-first-input">
                <label>Veuillez entrer votre matricule</label>
                <input className="first-input" type="text" required onChange={textUser}/>
                <button id='first-submit' type='submit'>Envoyer</button>
            </div>
    </>
}

export default FirstInput;
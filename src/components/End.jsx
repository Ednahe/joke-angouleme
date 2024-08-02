import React from "react";

const End = ({matricule, resSatisfaction = [], resQuestion = [], resInvest = []}) => {

    console.log('test', resSatisfaction, resQuestion, resInvest);
    

    return <>
        <h3>Rien à redire collaborateur {matricule} ?</h3>
        <h4>Un bon signe que tout va bien dans l'entreprise !</h4>
        <div>{resSatisfaction.join(', ')}</div>
        <div>{resQuestion.join(', ')}</div>
        <div>{resInvest.join(', ')}</div>
    </>
}

export default End;
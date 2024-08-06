import React from "react";

const End = ({matricule, resSatisfaction = [], resQuestion = [], resInvest = []}) => {

    console.log('test', resSatisfaction, resQuestion, resInvest);

    const checkQuestion = (checkOptions) => {
        return Object.keys(checkOptions).filter(key => checkOptions[key]).map(key => key.replace('check', '')).join(', ');
      };
    

    return <>
        <h3>Rien à redire collaborateur {matricule} ?</h3>
        <h4>Un bon signe que tout va bien dans l'entreprise !</h4>
        <div>Vous estimez que les relations entre collaborateurs sont de {resSatisfaction[0]} sur 10.</div>
        <div>Vous estimez que les relations avec les clients sont de {resSatisfaction[1]} sur 10.</div>
        <div>Vous estimez que les relations avec la direction sont de {resSatisfaction[2]} sur 10.</div>
        <div>Concernant les ouvriers de la déchetterie, vous avez coché : {resQuestion[0] && checkQuestion(resQuestion[0])}</div>
        <div>Concernant les ouvriers de la déchetterie, vous avez coché : {resQuestion[1] && checkQuestion(resQuestion[1])}</div>
        <div>{resInvest[0]}</div>
    </>
}

export default End;
import React from "react";

const End = ({matricule, resSatisfaction = [], resQuestion = [], resInvest = []}) => {

    console.log('test', resSatisfaction, resQuestion, resInvest);

    const responseQuestion = (checked, labels) => {
        if (!checked || !labels) {
            return 'erreur';
          }
        return Object.keys(checked).filter(key => checked[key]).map(key => labels[key]).join(' et ');
      };

      const defaultOptions = {
        0: 'courageux',
        1: '30%',
        2: 'pour l\'instant je sais pas',
      }
    

    return <>
        <h3>Rien à redire collaborateur {matricule} ?</h3>
        <h4>Un bon signe que tout va bien dans l'entreprise !</h4>
        <section className="end">
            <div>Vous estimez que les relations entre collaborateurs sont de {resSatisfaction[0]}/10.</div>
            <div>Vous estimez que les relations avec les clients sont de {resSatisfaction[1]}/10.</div>
            <div>Vous estimez que les relations avec la direction sont de {resSatisfaction[2]}/10.</div>
            <div>Vous estimez que les ouvriers de la déchetterie sont {responseQuestion(resQuestion.checkedOne, resQuestion.labelsOne)}</div>
            <div>Vous estimez qu'il ne faut pas augmenter les salaires des ouvriers parce que c'est {responseQuestion(resQuestion.checkedTwo, resQuestion.labelsTwo)}</div>
            <div className="render">Vous estimez que nos investisseurs sont {resInvest[0] || defaultOptions[0]}</div>
            <div className="render">Vous estimez que leur rémunération doit augmenter de {resInvest[1] || defaultOptions[1]}</div>
            <div className="render">vous estimez que nos investisseurs sont {resInvest[2] || defaultOptions[2]}</div>
            <p>Merci pour votre participation collaborateur {matricule}.</p>
            <p>Toutes les données récoltées seront revendu sur le dark net et nous vous déduirons 2h sur votre prochain salaire, temps estimé nécessaire à la réalisation de ce questionnaire</p>
            <h3>Vous devriez retourner au travail !</h3>
        </section>
    </>
}

export default End;
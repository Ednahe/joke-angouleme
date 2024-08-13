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
        2: 'grâce à eux vous avez un emploi et une dignité',
      }
    

    return <>
        <h3>Rien à redire collaborateur {matricule} ?</h3>
        <h4>Un bon signe que tout va bien dans l'entreprise !</h4>
        <section className="end">
          <div className="container-render">
          <div>Vous estimez que les relations entre collaborateurs sont de <span className="render">{resSatisfaction[0]}</span>/10.</div>
            <div className="contain-render" style={{ animationDelay: '0s' }}>Vous estimez que les relations avec les clients sont de <span className="render">{resSatisfaction[1]}</span>/10.</div>
            <div className="contain-render" style={{ animationDelay: '0.5s' }}>Vous estimez que les relations avec la direction sont de <span className="render">{resSatisfaction[2]}</span>/10.</div>
            <div className="contain-render" style={{ animationDelay: '1s' }}>Vous estimez que les ouvriers de la déchetterie sont <span className="render">{responseQuestion(resQuestion.checkedOne, resQuestion.labelsOne)}</span></div>
            <div className="contain-render" style={{ animationDelay: '1.5s' }}>Vous estimez qu'il ne faut pas augmenter les salaires des ouvriers parce que c'est <span className="render">{responseQuestion(resQuestion.checkedTwo, resQuestion.labelsTwo)}</span></div>
            <div className="contain-render" style={{ animationDelay: '2s' }}>Vous estimez que nos investisseurs sont <span className="render">{resInvest[0] || defaultOptions[0]}</span></div>
            <div className="contain-render" style={{ animationDelay: '2.5s' }}>Vous estimez que leur rémunération doit augmenter de <span className="render">{resInvest[1] || defaultOptions[1]}</span></div>
            <div className="contain-render" style={{ animationDelay: '3s' }}>Vous êtes reconnaissant envers nos investisseurs car <span className="render">{resInvest[2] || defaultOptions[2]}</span></div>
          </div>
          <div className="container-pend">
            <p>Merci pour votre participation collaborateur <span className="render">{matricule}</span>.</p>
            <p className="last-p">Toutes les données récoltées seront revendu sur le dark net et nous vous déduirons 2h sur votre prochain salaire, temps nécessaire estimé à la réalisation de ce questionnaire.</p>
          </div>                    
          <h3 className="getbacktowork">Vous devriez retourner au travail !</h3>
        </section>
    </>
}

export default End;
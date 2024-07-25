import React, { useState, useEffect } from "react";

const Welcome = ({ matricule, goSatisfaction }) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [visible, setVisible] = useState(false);

  const render = "Fonction :";
  const render2 = "Ouvrier polyvalent";

  useEffect(() => {
    const firstP = setTimeout(() => {
      setFirst(true);
    }, 800);

    const secondP = setTimeout(() => {
      setSecond(true);
    }, 1800);

    const showButton = setTimeout(() => {
      setVisible(true);
    }, 2800);

    return () => {
      clearTimeout(firstP);
      clearTimeout(secondP);
      clearTimeout(showButton);
    };
  }, []);

  return (
    <div className="container-welcome">
      <h2>Bienvenue collaborateur {matricule}</h2>
      <div className="welcome">
        <p id="firstP" className={first ? "visible" : ""}>{render}</p>
        <p id="secondP" className={second ? "visible" : ""}>{render2}</p>
      </div>
      <div
        className={`start ${visible ? "visible" : ""}`}
        onClick={goSatisfaction}
      >
        Commencer le questionnaire
      </div>
    </div>
  );
};

export default Welcome;

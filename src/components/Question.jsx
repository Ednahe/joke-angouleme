import React, { useState } from "react";

const Question = ({questionSubmit}) => {
  const [separate, setSeparate] = useState(0);
  const [error, setError] = useState('');
  const [checkedOne, setCheckedOne] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false
  });
  const [checkedTwo, setCheckedTwo] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false
  });

  const questions = [
    "D'une manière générale vous trouvez que les ouvriers de la dechetterie : (plusieurs choix possible)",
    "D'une manière générale vous trouvez qu'augmenter les salaires ce serait : (plusieurs choix possible)",
  ];

  const submitOne = (e) => {
    e.preventDefault();
    if(!Object.values(checkedOne).includes(true)) {
        setError('Veuillez sélectionner au moins une case.');
    } else {
        setSeparate(1);
        setError('');
    }    
  };

  const submitTwo = (e) => {
    e.preventDefault();
    if (!Object.values(checkedTwo).includes(true)) {
        setError('Veuillez sélectionner au moins une case.');
      } else {
        setError('');
        questionSubmit();
      }
  };

  const checkChangeOne = (check) => {
    setCheckedOne(prevState => ({
        ...prevState,
        [check]: !prevState[check]
    }));
    setError('');
  }

  const checkChangeTwo = (check) => {
    setCheckedTwo(prevState => ({
        ...prevState,
        [check]: !prevState[check]
    }));
    setError('');
  }

  return (
    <section className="question">
      {separate === 0 && (
        <>
          <h4>{questions[0]}</h4>
          <div className="contain-question">
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeOne('check1')} />
              <label>Sont trop nombreux.</label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeOne('check2')}/>
              <label>Sont trop payés.</label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeOne('check3')}/>
              <label>Sont trop souvent alcoolisés.</label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeOne('check4')}/>
              <label>Ne travaillent pas assez.</label>
            </div>
          </div>
          <p id="error">{error}</p>
          <button type="button" onClick={submitOne}>
            Valider
          </button>
        </>
      )}
      {separate === 1 && (
        <>
          <h4>{questions[1]}</h4>
          <div className="contain-question">
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeTwo('check1')}/>
              <label>
                Une très mauvaise idée pour la compétitivité de l'entreprise.
              </label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeTwo('check2')}/>
              <label>
                Une idée abominable car cela appauvrirait tout le monde.
              </label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeTwo('check3')}/>
              <label>
                Une idée stupide car cela détruirait des millions d'emplois.
              </label>
            </div>
            <div className="container-question">
              <input type="checkbox" onChange={() => checkChangeTwo('check4')}/>
              <label>
                Une idée insensé car nous devrions délocaliser en Roumanie.
              </label>
            </div>
          </div>
          <p id="error">{error}</p>
          <button type="button" onClick={submitTwo}>
            Valider
          </button>
        </>
      )}
    </section>
  );
};

export default Question;

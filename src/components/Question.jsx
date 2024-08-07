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

  const labelsOne = {
    check1: 'trop nombreux',
    check2: 'trop payés',
    check3: 'trop fainéants',
    check4: 'trop souvent alcoolisés'
  };

  const labelsTwo = {
    check1: 'une idée insensée car nous devrions délocaliser en Roumanie',
    check2: 'une idée abominable car cela appauvrirait tout le monde',
    check3: 'une très mauvaise idée car cela détruirait des millions d\'emplois',
    check4: 'une idée stupide car ils dépenseraient tout en alcool et en jeux à gratter'
  };

  const questions = [
    "D'une manière générale vous trouvez que les ouvriers de la dechetterie sont : (plusieurs choix possible)",
    "D'une manière générale vous trouvez qu'augmenter les salaires des ouvriers ce serait : (plusieurs choix possible)",
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
        questionSubmit(checkedOne, labelsOne, checkedTwo, labelsTwo);
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
            {Object.keys(labelsOne).map(key => (
              <div className="container-question" key={key}>
                <input type="checkbox" onChange={() => checkChangeOne(key)} />
                <label>{labelsOne[key]}</label>
              </div>
            ))}
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
            {Object.keys(labelsTwo).map(key => (
              <div className="container-question" key={key}>
                <input type="checkbox" onChange={() => checkChangeTwo(key)} />
                <label>{labelsTwo[key]}</label>
              </div>
            ))}
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

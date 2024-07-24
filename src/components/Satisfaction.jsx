import React, { useState } from "react";

const Satisfaction = ({submitCheck}) => {

    const [selected, setSelected] = useState(Array(3).fill(null));
    const [currentRow, setCurrentRow] = useState(0);
    const [error, setError] = useState("");

    const checkboxChange = (index) => {
        const newSelected = [...selected];
        newSelected[currentRow] = index;
        setSelected(newSelected);
        setError("");
    }

    const submit = (e) => {
        e.preventDefault();
        if (selected[currentRow] !== null) {
          if (currentRow < 2) {
            setCurrentRow(currentRow + 1);
          } else {
            console.log("Toutes les questions sont remplies :", selected);
            submitCheck();
          }
        } else {
          setError("Veuillez sélectionner une case à cocher avant de continuer.");
        }
    }

    const questions = [
        "De 0 à 10, comment noteriez-vous les relations entre collaborateurs au sein de l'entreprise ?",
        "De 0 à 10, comment noteriez-vous les relations avec les clients de l'entreprise ?",
        "De 0 à 10, comment noteriez-vous les relations avec la direction ?"
    ]

    return <>
    <div>
      <h4>{questions[currentRow]}</h4>
      <div className="container-checkbox">
        {Array.from({ length: 11 }).map((_, index) => (
          <div className="contain-check" key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={selected[currentRow] === index}
              disabled={currentRow === 2 && index !== 10}
              onChange={() => {
                if (currentRow === 2) {
                  if (index === 10) {
                    checkboxChange(index);
                  } else {
                    console.log('bonjour');
                  }
                } else {
                  checkboxChange(index);
                }
              }}
            />
            <label htmlFor={`checkbox-${index}`}>{index}</label>
          </div>
        ))}
      </div>
      <p id="error">{error}</p>
      <button className="btn-check" type="button" onClick={submit}>Valider</button>
    </div>
  </>
}

export default Satisfaction;
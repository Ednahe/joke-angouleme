import React from "react";

const FreeExpression = ({expressionSubmit}) => {

    const submit = (e) => {
        e.preventDefault();
        expressionSubmit();
    }

  return (
    <>
      <section className="free">
        <div className="container-free">
          <h3>Expression libre</h3>
          <p>
            A votre plume collaborateur, ici vous pouvez librement exprimer vos
            ressentis vis à vis de notre grande et belle famille qu'est notre
            entreprise.
          </p>
          <textarea name="free" id="text-free" readOnly></textarea>
        </div>
      </section>
      <button type='button' onClick={submit}>Valider</button>
    </>
  );
};

export default FreeExpression;

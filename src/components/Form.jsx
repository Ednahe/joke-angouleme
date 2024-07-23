import { useState } from 'react';
import FirstInput from './FirstInput';
import Pub from './Pub';
import Welcome from './Welcome';
import Satisfaction from './Satisfaction';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [satisfaction, setSatisfaction] = useState(false);
    const [matricule, setMatricule] = useState('');

    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const startSatisfaction = () => {
        setSatisfaction(true);
    }

    const inputChange = (e) => {
        setMatricule(e.target.value);
    }

    return <section className="container-form">
        <form onSubmit={submit} className="form">
            <h1>Questionnaire de satisfaction à destination des collaborateurs</h1>
            {!submitted && <FirstInput textUser={inputChange}/>}
            {!satisfaction && submitted && <Welcome matricule={matricule} goSatisfaction={startSatisfaction} />}
            {satisfaction && <Satisfaction />}
        </form>
        <Pub />
    </section>
}

export default Form;
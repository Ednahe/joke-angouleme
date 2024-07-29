import { useState } from 'react';
import FirstInput from './FirstInput';
import Pub from './Pub';
import Welcome from './Welcome';
import Satisfaction from './Satisfaction';
import Question from './Question';
import Invest from './Invest';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [satisfaction, setSatisfaction] = useState(false);
    const [question, setQuestion] = useState(false);
    const [invest, setInvest] = useState(false);
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

    const submitSatisfaction = () => {
        setSatisfaction(false);
        setQuestion(true);
    }

    const submitQuestion = () => {
        setQuestion(false);
        setInvest(true);
    }

    return <section className="container-form">
        <form onSubmit={submit} className="form">
            <h1>Questionnaire de satisfaction à destination des collaborateurs</h1>
            {!submitted && <FirstInput textUser={inputChange}/>}
            {!satisfaction && submitted && !question && !invest && <Welcome matricule={matricule} goSatisfaction={startSatisfaction} />}
            {satisfaction && !question && <Satisfaction submitCheck={submitSatisfaction} />}
            {question && <Question questionSubmit={submitQuestion}/>}
            {invest && <Invest />}
        </form>
        <Pub />
    </section>
}

export default Form;
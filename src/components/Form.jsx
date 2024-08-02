import { useState } from 'react';
import FirstInput from './FirstInput';
import Pub from './Pub';
import Welcome from './Welcome';
import Satisfaction from './Satisfaction';
import Question from './Question';
import Invest from './Invest';
import FreeExpression from './FreeExpression';
import End from './End';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [satisfaction, setSatisfaction] = useState(false);
    const [question, setQuestion] = useState(false);
    const [invest, setInvest] = useState(false);
    const [expression, setExpression] = useState(false);
    const [end, setEnd] = useState(false);
    const [matricule, setMatricule] = useState('');
    const [resSatisfaction, setResSatisfaction] = useState([]);
    const [resQuestion, setResQuestion] = useState([]);
    const [resInvest, setResInvest] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('formulaire soumis');
        
    }

    const startSatisfaction = () => {
        setSatisfaction(true);
        console.log('satisfaction');
        
    }

    const inputChange = (e) => {
        setMatricule(e.target.value);
    }

    const submitSatisfaction = (response) => {
        setSatisfaction(false);
        setQuestion(true);
        setResSatisfaction(response);
        console.log('satisfation soumis +', response);
        
    }

    const submitQuestion = (response) => {
        setQuestion(false);
        setInvest(true);
        setResQuestion(response);
        console.log('question soumis +', response);
        
    }

    const submitInvest = (response) => {
        setInvest(false);
        setExpression(true);
        setResInvest(response);
        console.log('invest soumis +', response);
        
    }

    const submitExpression = () => {
        setExpression(false);
        setEnd(true);
        console.log('exp soumis');
        
    }

    return <section className="container-form">
        <form onSubmit={submit} className="form">
            <h1>Questionnaire de satisfaction à destination des collaborateurs</h1>
            {!submitted && <FirstInput textUser={inputChange}/>}
            {!satisfaction && submitted && !question && !invest && !expression && !end && <Welcome matricule={matricule} goSatisfaction={startSatisfaction} />}
            {satisfaction && !question && <Satisfaction submitCheck={(response) => submitSatisfaction(response)} />}
            {question && <Question questionSubmit={(response) => submitQuestion(response)}/>}
            {invest && <Invest investSubmit={(response) => submitInvest(response)}/>}
            {expression && <FreeExpression expressionSubmit={(response) => submitExpression(response)}/>}
            {end && <End matricule={matricule} resSatisfaction={resSatisfaction} resQuestion={resQuestion} resInvest={resInvest} />}
        </form>
        <Pub />
    </section>
}

export default Form;
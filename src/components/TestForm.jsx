import { useState } from "react";

const TestForm = () => {

    // const [firstname, setFirstname] = useState('John Doe');
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(true);

    // const handleChange = (e) => {
    //     setFirstname(e.target.value)
    // }

    const handleChange2 = (e) => {
        setValue(e.target.value)
    }

    const toggleCheck = () => {
        setChecked(!checked)
    }

    // const reset = () => {
    //     setFirstname('')
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(new FormData(e.target));
    }

    return <form onSubmit={handleSubmit}> 
        {/* <input type="text" name="firstname" value={firstname} onChange={handleChange}/> */}
        <input type="text" name="firstname" value={value} onChange={handleChange2}/>
        <textarea value={value} onChange={handleChange2}></textarea>
        <input type="checkbox" checked={checked} onChange={toggleCheck}></input>
        <button disabled={!checked}>envoyer</button>
        {/* <button onClick={reset} type="button">Reset</button> */}
    </form>
}

export default TestForm;
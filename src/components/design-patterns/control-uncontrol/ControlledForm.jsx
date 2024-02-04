import { useEffect, useState } from "react"

export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=>{
        if(name.length < 2){
            setErrorMessage('Name should have more than 2 charachters')
        }
        else{
            setErrorMessage('')
        }
    },[name])

    return(
        <>
        <form>
            {errorMessage && <p>{errorMessage}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <input name="age"  type="number" placeholder="Age" value={age}onChange={e => setAge(Number(e.target.value))}/>
            <button type="submit">Submit</button>
        </form>
        </>

    )
 }
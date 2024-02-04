export const LargePerson = ({person}) => {
    const {name, age,hairColor, hobbies} = person
    return(
        <>
            <p>{name}</p>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <ul>
                {hobbies.map((item, i )=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}
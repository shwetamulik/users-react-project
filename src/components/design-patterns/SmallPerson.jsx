export const SmallPerson = ({person}) => {
    const {name, age} = person
    return(
        <>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        </>
    )
}
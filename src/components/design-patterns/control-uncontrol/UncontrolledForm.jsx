import { useRef } from "react"

export const UncontrolledForm = () => {
    const inputRef = useRef();
    const ageRef = useRef();
    const hairColorRef = useRef();

    const handleSubmit = (e) => {
        console.log(inputRef.current.value)
        console.log(ageRef.current.value)
        console.log(hairColorRef.current.value)
        e.preventDefault()
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Name" ref={inputRef}/>
            <input type="number" placeholder="Age" ref={ageRef}/>
            <input type="text" placeholder="Haircolor" ref={hairColorRef}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}
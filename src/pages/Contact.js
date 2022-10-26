import {useState, useEffect} from 'react'

const Contact = () => {
    // useState example
    const [nameUser, setNameUser] = useState("Vítor")
    const [count, setCount] = useState(0)

    // useEffect example
    useEffect( () => {
        console.log(count)
    }, [count])

    return (
        <>
        <h1>Hello {nameUser}!</h1>
        <button onClick={() => setNameUser("Renan")}>Change name to Renan</button>
        <br/>
        <button onClick={() => setNameUser("Vítor")}>Change name back to Vítor</button>
        <br/>
        <h1>My number is: {count}.</h1>
        <button onClick={() => setCount(count + 1)}>Plus 1</button>
        <br/><br/>
        </>
    )
}

export default Contact
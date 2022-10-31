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
            <h1>useState and useEffect example:</h1>
            <ul>
                <li>
                    <h2>Hello {nameUser}!</h2>
                    <ul>
                        <li><button onClick={() => setNameUser("Renan")}>Change name to Renan</button></li>
                        <li><button onClick={() => setNameUser("Vítor")}>Change name back to Vítor</button></li>
                    </ul>
                </li>
                <li>
                    <h2>My number is: {count}.</h2>
                    <ul>
                        <li><button onClick={() => setCount(count + 1)}>Plus 1</button></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Contact
import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from '../components/Header.js'
import MainContainer from '../components/MainContainer.js'
import Footer from '../components/Footer.js'

const User = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const requestUserById = async (id) => {
        const response = await fetch(`http://localhost/vitor_ambrizzi/2022-2/linguagem_de_programacao_2-LP2I3/user/by-id?id=${id}`)
        const result = await response.json()
        console.log(result?.success?.message)
        if (result?.error) {
            navigate('/not-found')
        }
        setUser(result.data)
    }

    useEffect(() => {
        requestUserById(id)
    // eslint-disable-next-line
    }, [])

    return(
        <>
            <Header />
            <MainContainer>
                {
                    user?.name ?
                        <>
                            <h1>{user.name}</h1>
                            <img src={user.avatar} alt={user.name}/>
                            <p>Email: {user.email}</p>
                        </>
                    :
                        <p>Loading user...</p>
                }
            </MainContainer>
            <Footer />
        </>
    )
}

export default User
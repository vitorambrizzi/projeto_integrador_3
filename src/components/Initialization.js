import {useState, useEffect} from 'react'
import styled from 'styled-components'
import useAuth from '../hooks/useAuth'
import Loader from './Loader'

const Initialization = ({children}) => {
    const [firstLoad, setFirstLoad] = useState(true)
    const [, setUserLogged] = useAuth()

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('user-auth'))
        if (auth?.isLogged) {
            setUserLogged(auth)
        }
        setTimeout(() => {
            setFirstLoad(false)
        }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                firstLoad ?
                    <Loading><p><Loader /></p><br /><br /><p>Loading...</p></Loading>
                :
                    children
            }
        </>
    )
}

export default Initialization

const Loading = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #cccccc;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
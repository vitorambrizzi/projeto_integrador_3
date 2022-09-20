import {useState, useEffect} from 'react'
import Header from '../components/Header.js'
import MainContainer from '../components/MainContainer.js'
import CardComment from '../components/CardComment.js'
import Footer from '../components/Footer.js'
import './Home.css'

const Home = () => {
  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch('http://localhost/vitor_ambrizzi/2022-2/linguagem_de_programacao_2-LP2I3/user/list')
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
  }

  useEffect( () => {
    requestUsers()
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Home</h1>

        <p>API User list:</p>
        {  
          users.length === 0
          ?
            <p>No users!</p>
          :
            users.map((user) => {
              return (
                <CardComment key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id}>
                  {user.email}
                </CardComment>
              )
            })
        }
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home
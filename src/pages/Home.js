import {useState, useEffect} from 'react'
import {API_PATH} from '../config'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import CardUser from '../components/CardUser'
import Footer from '../components/Footer'

const Home = () => {
  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch(`${API_PATH}user/list`)
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
                <CardUser users={users} setUsers={setUsers} key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id}>
                  {user.email}
                </CardUser>
              )
            })
        }
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home
import {useState, useEffect} from 'react'
import {API_PATH} from '../config'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import CardUser from '../components/CardUser'
import Modal from '../components/Modal'
import Footer from '../components/Footer'

const Home = () => {
  const [users, setUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState({
    id: '',
    name: '',
    email: '',
    avatar: ''
  })
  const [showModal, setShowModal] = useState(false)

  const requestUsers = async () => {
    const response = await fetch(`${API_PATH}user/list`)
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
  }

  const handleChange = (event) => {
    setUserToEdit({...userToEdit, [event.target.name]: event.target.value})
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
                <CardUser users={users} setUsers={setUsers} key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id} setShowModal={setShowModal} setUserToEdit={setUserToEdit}>
                  {user.email}
                </CardUser>
              )
            })
        }
      </MainContainer>
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>Edit User</h1>
        <form>
          <input type='hidden' name='id' value={userToEdit.id} />
          <p>Name: <input type='text' name='name' value={userToEdit.name} onChange={(event) => handleChange(event)}
          /></p>
          <p>Email: <input type='text' name='email' value={userToEdit.email} onChange={(event) => handleChange(event)}
          /></p>
          <p>Avatar: <input type='text' name='avatar' value={userToEdit.avatar} onChange={(event) => handleChange(event)}
          /></p>
          <input type='submit' value='send' />
        </form>
      </Modal>
    </>
  )
}

export default Home
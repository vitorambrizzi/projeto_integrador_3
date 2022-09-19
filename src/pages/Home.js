import {useEffect, useState} from "react";
import Header from "../components/Header.js";
import MainContainer from "../components/MainContainer.js";
import CardComment from "../components/CardComment.js";
import Footer from "../components/Footer.js";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect( () => {
    requestUsers()
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Home</h1>

        <p>Lista de usuários API GitHub:</p>
        {  
          users.length === 0 ?
            <p>Nenhum usuário!</p>
          :
            users.map((user) => {
              return (
                <CardComment key={user.id} avatarUrl={user.avatar_url} name={user.login}>
                  {user.html_url}
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
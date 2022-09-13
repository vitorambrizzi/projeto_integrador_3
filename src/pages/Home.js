import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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
        <p>
          Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, 
          o React foi a terceira biblioteca ou framework[8] mais citado pelos usuários e 
          desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, 
          respectivamente[9].
        </p>

        <CardComment initial='R' name='Renan'>
          Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira
        </CardComment>
        <CardComment initial='V' name='Vítor'>
          Profissionais, ficando atrás somente do Node.js e Angular
        </CardComment>
        <CardComment initial='C' name='Carmo'>
          Fiquei amigo do React!
        </CardComment>

        <Link to='/contact'>Contact</Link><br />
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home
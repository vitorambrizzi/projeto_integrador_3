import {Link} from "react-router-dom";
import Header from "../components/Header.js";
import MainContainer from "../components/MainContainer.js";
import Footer from "../components/Footer.js";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Contact</h1>
        <p>Aqui é o Contact.</p>
        <Link to='/'>Home</Link>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Contact
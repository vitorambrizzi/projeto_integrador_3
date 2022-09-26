import {Link} from 'react-router-dom'
import Header from '../components/Header'
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
        <Header />
        <MainContainer>
            <h1>Page not Found!</h1>
            <Link to='/'>Back to Home</Link>
        </MainContainer>
        <Footer />
    </>
  )
}

export default NotFound
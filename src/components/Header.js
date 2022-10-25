import {RiNeteaseCloudMusicFill as Music} from 'react-icons/ri'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import ButtonLoading from './ButtonLoading'
import './Header.css';

const Header = () => {
  const [userLogged,] = useAuth()
  const navigate = useNavigate()

  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <Music className='icon-logo'/>
            <h1>Social Music - User ID: {userLogged.idUser}</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/contact' end>Contact</NavLink></li>
            {
              userLogged.isLogged ? (
                <li><ButtonLoading isLoading={false}>Exit</ButtonLoading></li>
              ) : (
                <>
                  <li><NavLink to='/sign-up' end>Sign Up</NavLink></li>
                  <li><ButtonLoading onClick={() => navigate('/login')} isLoading={false}>Login</ButtonLoading></li>
                </>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
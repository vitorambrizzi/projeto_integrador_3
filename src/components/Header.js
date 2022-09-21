import {RiNeteaseCloudMusicFill as Music} from 'react-icons/ri'
import {Link, NavLink} from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <Music className='icon-logo'/>
            <h1>Social Music</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/contact' end>Contact</NavLink></li>
            <li><NavLink to='/sign-up' end>Sign Up</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
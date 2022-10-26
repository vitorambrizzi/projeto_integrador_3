import {RiNeteaseCloudMusicFill as Music} from 'react-icons/ri'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import logout from '../helpers/logout'
import ButtonLoading from './ButtonLoading'
import './Header.css';

const HeaderAdmin = () => {
    const [userLogged, setUserLogged] = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        const result = await logout(userLogged.idUser, userLogged.token)
        console.log(result)
        if (result?.success) {
            localStorage.removeItem('user-auth')
            setUserLogged({
                isLogged: false,
                idUser: '',
                token: '',
                role: ''
            })
            navigate('/')
        }
    }

    return (
        <header className='Header'>
            <div className='container'>
                <Link to='/admin'>
                    <div className='logotype'>
                        <Music className='icon-logo'/>
                        <h1>Admin Area</h1>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li><NavLink to='/' end>Home</NavLink></li>
                        <li><ButtonLoading onClick={() => handleLogout()} isLoading={false}>Exit</ButtonLoading></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderAdmin
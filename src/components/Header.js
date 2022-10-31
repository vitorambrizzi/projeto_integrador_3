import {FaReact as React} from 'react-icons/fa'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import logout from '../helpers/logout'
import ButtonLoading from './ButtonLoading'
import './Header.css';

const Header = () => {
	const [userLogged, setUserLogged] = useAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
        const result = await logout(userLogged.idUser, userLogged.token)
        console.log(result.success.message)
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
				<Link to='/'>
					<div className='logotype'>
						<React className='icon-logo'/>
						<h1>Frontend React</h1>
					</div>
				</Link>
				<nav>
					<ul>
						<li><NavLink to='/' end>Home</NavLink></li>
						<li><NavLink to='/contact' end>Contact</NavLink></li>
						<li><NavLink to='/sign-up' end>Sign Up</NavLink></li>
						{
							userLogged.isLogged ? (
								<li><ButtonLoading onClick={() => handleLogout()} isLoading={false}>Exit</ButtonLoading></li>
							) : (
								<li><ButtonLoading onClick={() => navigate('/login')} isLoading={false}>Login</ButtonLoading></li>
							)
						}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
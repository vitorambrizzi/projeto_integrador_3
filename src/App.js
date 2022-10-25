import {Routes, Route} from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import User from './pages/User'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} status={404} />
      </Routes>
    </AuthProvider>
  )
}

export default App
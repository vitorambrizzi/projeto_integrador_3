import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import SignUp from './pages/SignUp.js'
import User from './pages/User.js'
import NotFound from './pages/NotFound.js'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='*' element={<NotFound />} status={404} />
    </Routes>
  )
}

export default App;
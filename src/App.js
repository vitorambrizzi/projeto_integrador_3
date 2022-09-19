import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import SignUp from "./pages/SignUp.js";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  );
}

export default App;
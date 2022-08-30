import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
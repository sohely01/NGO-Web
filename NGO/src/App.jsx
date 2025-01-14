import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>

        <BrowserRouter>

        <Routes>
          <Route path= '/' element = {<Home/>} />
          <Route path= '/about' element = {<About/>} />
          <Route path= '/events' element = {<Events/>} />
          <Route path= '/contact' element = {<Contact/>} />

        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

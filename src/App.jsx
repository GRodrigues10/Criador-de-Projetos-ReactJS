import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/Layout/Container';
import NavBar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer'
import Projects from './Components/Pages/projects';

function App() {
  return (
    <>
      <Router>
        <NavBar/>

        <Container customClass='minHeight'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
          </Routes>
         
        </Container>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
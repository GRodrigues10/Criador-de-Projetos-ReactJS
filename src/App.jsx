import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import NewProject from './Components/Pages/NewProject';

import Container from './Components/Layout/Container';

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to='/'>Inicio</Link>
          <Link to='/company'>Empresa</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/newproject'>Novo Projeto</Link>
        </div>

        <Container customClass='minHeight'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
          </Routes>
        </Container>

        <p>Footer</p>
      </Router>
    </>
  );
}

export default App;
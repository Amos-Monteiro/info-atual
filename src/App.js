<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======

// imports de funções.
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

// Paginas.
import Inicio from './components/pages/Inicio/Inicio';
import Ciencias from './components/pages/ciencia/Ciencias';
import Economia from './components/pages/economia/Economia';
import Esportes from './components/pages/esportes/Esportes';
import Tecnologia from './components/pages/Tecnologia/Tecnologia';


//Componentes. 
import NavBar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
    
     <Routes>
        <Route path="/" element ={<Inicio/>}/>

        <Route path="/esportes" element ={<Esportes/>}/>

        <Route path="/ciencias" element ={<Ciencias/>}/>

        <Route path="/tecnologia" element ={<Tecnologia/>}/>

        <Route path="/economia" element ={<Economia/>}/>

        

     </Routes>
     <Footer/>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;

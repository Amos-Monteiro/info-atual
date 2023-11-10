
// imports de funções.
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

// Paginas.
import Inicio from './components/pages/Inicio/Inicio';
import Equipe from './components/pages/Equipe/Equipe';

//Componentes. 
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
    
     <Routes>
        <Route path="/" element ={<Inicio/>}/>

        <Route path="/equipe" element ={<Equipe/>}/>



      
     </Routes>
     <Footer/>
    </Router>
  );
}

export default App;

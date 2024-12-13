import React, { useState } from 'react';
import Login from './componentes/Login';
import Home from './componentes/Home';
import CadastroAnimal from './componentes/CadastroAnimal';
import Contrato from './componentes/Contrato';
import Navbar from './componentes/Navbar';
import Financeiro from './componentes/Financeiro';
import Registro from './componentes/Registro';
import CadastroTutor from './componentes/CadastroTutor';
import Consulta from './componentes/Consulta';
import Calendario from './componentes/Calendario';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //login
  const [currentPage, setCurrentPage] = useState('home'); //pagina atual

//renderizar a pagina atual
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cadastroAnimal':
        return <CadastroAnimal onNavigate={setCurrentPage} />;
      case 'cadastroTutor':
        return <CadastroTutor onNavigate={setCurrentPage}/>;
      case 'contrato':
        return <Contrato onNavigate={setCurrentPage}/>;
      case 'registro':
        return <Registro onNavigate={setCurrentPage}/>;
      case 'calendario':
        return <Calendario onNavigate={setCurrentPage}/>;
      case 'financeiro':
        return <Financeiro onNavigate={setCurrentPage}/>;
      case 'consulta':
        return <Consulta />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Navbar onNavigate={setCurrentPage} />
          <div className="page-content">{renderPage()}</div>
        </>
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;

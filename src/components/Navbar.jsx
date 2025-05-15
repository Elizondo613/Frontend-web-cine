import { useState } from 'react';
import '../styles/Navbar.css';
import Login from '../pages/Login';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">CineGT</div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/salas">Salas</a></li>
          <li>
            <a href="#login" onClick={(e) => { e.preventDefault(); handleOpenLogin(); }}>
              Iniciar Sesión
            </a>
          </li>
        </ul>
      </nav>
      {isLoginOpen && <Login onClose={handleCloseLogin} />}
    </>
  );
};

export default Navbar;
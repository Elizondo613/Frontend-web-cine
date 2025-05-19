import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { isAuthenticated, logout, getUser } from '../utils/auth';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getUser());
    }
  }, []);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
    if (isAuthenticated()) {
      setUser(getUser());
    }
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
    if (isAuthenticated()) {
      setUser(getUser());
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Cine</div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/salas">Salas</a></li>
          <li>
            {isAuthenticated() ? (
              <>
                <span className="user-greeting">Hola, {user?.nombre}</span>
                <a href="#logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                  Cerrar Sesión
                </a>
              </>
            ) : (
              <a href="#login" onClick={(e) => { e.preventDefault(); handleOpenLogin(); }}>
                Iniciar Sesión
              </a>
            )}
          </li>
        </ul>
      </nav>
      {isLoginOpen && <Login onClose={handleCloseLogin} onSwitchToRegister={handleOpenRegister} />}
      {isRegisterOpen && <Register onClose={handleCloseRegister} onSwitchToLogin={handleOpenLogin} />}
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Mini Twitter</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/explore">Explorar</Link></li>
        <li><Link to="/notifications">Notificaciones</Link></li>
        <li><Link to="/messages">Mensajes</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

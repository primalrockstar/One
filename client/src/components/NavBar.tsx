import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/clinical-calculators">Clinical Calculators</Link>
  </nav>
);

export default NavBar;

import logo from './logo.svg';
import {Link} from "react-router-dom"

import './App.css';

const Header = () => {
  return (
    <div className="header">
      <header>
      <Link to="/">
    <h1>THE NEWS</h1>
      </Link>
      </header>
    </div>
  );
}

export default Header
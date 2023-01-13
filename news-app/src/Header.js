import theNews from '../src/reactiveNewsLogos/Reactive News-logos.jpeg'
import logo from './logo.svg';
import {Link} from "react-router-dom"

import './App.css';

const Header = () => {
  return (
    <div className="header">
      <header>
      <Link to="/">
      <img src={theNews} height="200px" width="auto"  alt="logo"  />
      </Link>
      </header>
    </div>
  );
}

export default Header
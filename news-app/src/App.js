import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from '../src/Nav'
import Home from '../src/components/Home'
import Users from '../src/components/Users'
import Articles from '../src/components/Articles'
import Comments from '../src/components/Comments'
import './App.css';
import './news.css';

const App = () => {
  return (
    <div className="header">
      <header className="header">
      <Header />
      <Nav/>
      </header>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/topics" element={<Articles />} />
      <Route path="/comments" element={<Comments />} />
      </Routes>
     
    </div>
    
  );
}

export default App;

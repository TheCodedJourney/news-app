import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from '../src/Nav'
import Home from '../src/components/Home'
import Users from '../src/components/Users'
import Articles from '../src/components/Articles'
import Comments from '../src/components/Comments'
import SingleArticle from '../src/components/SingleArticle'
import './App.css';
import './news.css';

const App = () => {

  console.log("Nav acknowledgement")
  return (
    <div className="header">
      <header className="header">
      <Header />
      <Nav/>
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="/articles/:article_id/comments" element={<Comments />} />
      {/* <Route path="/articles/theme/:slug_id" element={<Articles />} /> */}
      <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;

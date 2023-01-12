import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from '../src/Nav'
import Home from '../src/components/Home'
import Users from '../src/components/Users'
import Articles from '../src/components/Articles'
import Comments from '../src/components/Comments'
import SingleArticle from '../src/components/SingleArticle'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  return (
    <div className="header">
      <header className="header">
      <Header />
      <Nav/>
      {/* <iframe src="https://open.spotify.com/embed/track/4ZtYo7EHWYsTvqsLL153r4" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
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

import logo from '../logo.svg';
import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../news.css';
import { useEffect, useState } from 'react';





const Articles = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const {topic_slug} = useState()
  
  useEffect(() => {
    setIsLoading(true)
    getArticles(topic_slug).then(({articles}) => {
      setArticles(articles);
      setIsLoading(false)
    })
  }, []);

  if (isLoading) {
    return <p className='Loading'>Loading...</p>
  }
    
  return (
    <div className="App">
      <header className="logo">
        <p>
        THIS IS THE ARTICLES SECTION
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default Articles;
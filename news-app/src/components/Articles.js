import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import '../news.css';

const Articles = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const {topics_slug} = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    getArticles(topics_slug).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false)
    })
  }, [topics_slug]);

  if (isLoading) {
    return <p className='Loading'>Loading...</p>
  }

  return (
    <div className="App">
      <header className="logo">
        <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <p>{article.article_title}</p>
            <p>{article.topics_slug}</p>
            <p>Comments:{article.comments}</p>
          </li>
        ))}
        </ul>
      </header>
    </div>
  );
}


export default Articles;
import { getArticles } from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import '../news.css';

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const {slug_id, article_id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const filter = searchParams.get(`topic`)

  useEffect(() => {
    setIsLoading(true)
    getArticles(filter).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false)
    })
  }, [filter]);

  if (isLoading) {
    return <p className='Loading'>Loading...</p>
  }
  
  return (
    <div className="App">
      <header className="logo">
        <ul>
        {
          articles.map((article) => ( 
          <li key={article.article_id}>
          <Link 
            to={`/articles/${article.article_id}`}
            key={article_id}
        > 
        {article.title}
        </Link> 
            <p>{article.title} </p>
            <p>by {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
         ))}
        </ul>
      </header>
    </div>
  );
}


export default Articles;
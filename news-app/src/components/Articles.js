import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import '../news.css';

const Articles = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const {slug_id} = useParams()
  
  
  

  console.log(articles, "articles")

  useEffect(() => {
    setIsLoading(true)
    getArticles(slug_id).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false)
    })
  }, [slug_id]);

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
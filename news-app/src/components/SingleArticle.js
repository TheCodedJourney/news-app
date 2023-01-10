
import Articles from './Articles'
import { getArticle } from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import '../news.css';


// Articles()

const SingleArticle = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState([])
  const {article_id} = useParams()
  
  console.log("hello")
  console.log(article, "han solo article")

  useEffect(() => {
    setIsLoading(true)
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false)
    })
  }, [article_id]);

  if (isLoading) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <div className="App">
      <header className="logo">
        <ul>
          <li key={article_id}>
            <p>{article.title} </p>
            <p>by {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Comments: {article.comment_count}</p>
          </li>
          </ul>
      </header>
    </div>
  );
}


export default SingleArticle;
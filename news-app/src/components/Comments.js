import Articles from './Articles'
import { getArticle, getArticleComments} from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import '../news.css';



const Comments = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const {slug_id, article_id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    getArticleComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false)
    })
  }, [article_id]);

  console.log(comments, "This is toms comments ")
  console.log(article_id, "This is toms article filter")


  if (isLoading) {
    return <p className='Loading'>Loading...</p>
  }
  
  return (
    <div className="App">
      <header className="logo">
        <ul>

          {
          comments.map((comment) => ( 
          <li key={comment.comment_id}>
            <p>Author: {comment.author}</p>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {/* <p>{comment.created_at}</p> find out how to get a parsed date */}
          </li>
         ))}
        </ul>
      </header>
    </div>
  );
}

export default Comments;
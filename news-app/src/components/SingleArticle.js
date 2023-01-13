
import Articles from './Articles'
import Vote from './Votes'
import { getArticle, getArticleComments} from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap';



const SingleArticle = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState([])
  const {article_id} = useParams()

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

    <Row>
  <Col key={article_id} sm={6} md={6} lg={6} className="mx-auto">
    <Card key={article_id} className="w-100">
      <Card.Header>
        <Card.Title className="text-muted">{article.topic[0].toUpperCase() + article.topic.slice(1, article.topic.length )}</Card.Title>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text> by {article.author}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-muted">{article.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Card.Text className="text-muted"><Vote votes={article.votes} articleId={article_id}></Vote></Card.Text>
        <Card.Text className="text-muted"><Link 
      to={`/articles/${article_id}/comments`}
      key={article_id}
  > 
      view comments / leave comment 
  </Link> </Card.Text>
      </Card.Footer>
    </Card>
  </Col>
</Row>


  );
}


export default SingleArticle;


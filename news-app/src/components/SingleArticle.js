
import Articles from './Articles'
import { onPostComment } from '../utils/api';

import Vote from './Votes'
import { getArticle, getArticleComments} from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';



const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const {article_id } = useParams()
    const [newComment, setNewComment] = useState("");
    const [commentToSubmit, setCommentToSubmit] = useState("")
    const [article, setArticle] = useState([])

  
    useEffect(() => {
      setIsLoading(true)
      getArticleComments(article_id).then(({ comments }) => {
        setComments(comments);
        setIsLoading(false)
      })
    }, [article_id, commentToSubmit]);
  
    useEffect(() => {
      setIsLoading(true)
      getArticle(article_id).then(({ article }) => {
        setArticle(article);
        setIsLoading(false)
      })
    }, [article_id]);
  
  
    function handleCommentChange(event) {
      event.preventDefault();
      setNewComment(event.target.value);
    }
  
    function handleCommentSubmit(event) {
      event.preventDefault();
      onPostComment(article_id, newComment)
        .then(() => {
          setCommentToSubmit(newComment);
          setNewComment("");
          setIsLoading(true);
          getArticleComments(article_id).then(({ comments }) => {
            setComments(comments);
            setIsLoading(false);
          });
        });
    }

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
      view comments 
  </Link> </Card.Text>
      </Card.Footer>
    </Card>
  </Col>
  <Form onSubmit={handleCommentSubmit}>
    <FormGroup>
      <label for="newComment">Leave a comment:</label>
      <FormControl 
          as="textarea"
          name="newComment"
          id="newComment"
          value={newComment}
          onChange={handleCommentChange}
      />
    </FormGroup>
    <Button type="submit">Post Comment</Button>
  </Form>
</Row>


  );
}


export default SingleArticle;


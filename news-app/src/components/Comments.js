import moment from "moment"
import { getArticleComments, onPostComment} from '../utils/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Container, FormGroup, Form, FormControl, Button} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



const Comments = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState([])
  const {article_id } = useParams()
  const [newComment, setNewComment] = useState("");
  const [commentToSubmit, setCommentToSubmit] = useState("")

  useEffect(() => {
    setIsLoading(true)
    getArticleComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false)
    })
  }, [article_id, commentToSubmit]);


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
    return <p className='Loading'>Loading...</p>
  }
  
  return (
<Container>
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
  <div>
    {comments.map((comment) => (
      <div key={comment.comment_id}>
        <Card>
          <Card.Body>
            <Card.Title>Author: {comment.author} </Card.Title>
            <Card.Text>Comment: {comment.body}</Card.Text>
            <Card.Text className="text-muted">
              {moment(comment.created_at).format("MMM Do YYYY")}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
</Container>
  );
}

export default Comments;
import moment from "moment"
import { getArticleComments, onPostComment, onDeleteComment} from '../utils/api';
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
  
  function handleCommentDelete(comment_id) {
    console.log("Hey")
    onDeleteComment(comment_id)
    .catch((err) => {
      console.log(err)
    })
      .then(() => {
        console.log("Second hey")
        setComments(comments => comments.filter(comment => comment.comment_id !== comment_id));
      })
      .catch((error) => {
        console.error(`Error deleting comment: ${error}`);
      });
  }


  if(comments.length === 0) {
    return <div class="d-flex justify-content-center">
        <Card>
            <Card.Body >
                <Card.Title class="d-flex justify-content-center"> <p class="font-weight-bold">No comments to show</p></Card.Title>
                <iframe title="nothingHere" src="https://giphy.com/embed/a93jwI0wkWTQs" width="480" height="360" class="giphy-embed" allowFullScreen></iframe>
            </Card.Body>
        </Card>
    </div>}

return (
    <Container>
        <Form onSubmit={handleCommentSubmit}>
            <FormGroup>
                <label htmlFor="newComment">Leave a comment:</label>
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
                            <Button onClick={() => handleCommentDelete(comment.comment_id)}>Delete Comment</Button>
                            <Card.Title>Author: {comment.author} </Card.Title>
                            <Card.Text>Comment: {comment.body}</Card.Text>
                            <Card.Text>Comment id {comment.comment_id}</Card.Text>
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
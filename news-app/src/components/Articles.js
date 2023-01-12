import { getArticles } from '../utils/api';
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap';


const Articles = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const { article_id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState()
  const [sortOrder, setSortOrder] = useState("ascending");

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

  function sortArticles() {
    let sortedArticles = [...articles];
    if (sortBy === "comments") {
      sortedArticles.sort((a, b) => a.comment_count - b.comment_count);
    } else if (sortBy === "votes") {
      sortedArticles.sort((a, b) => a.votes - b.votes);
    }
    if (sortOrder === "descending") {
      sortedArticles.reverse();
    }
    return sortedArticles;
  }

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }

  function handleSortOrderChange(event) {
    setSortOrder(event.target.value);
  }

  return (
    <Container>
    <Row className="mb-3">
      <Col>
        <Form>
          <Form.Group controlId="sortBySelect">
            <Form.Label>Sort by</Form.Label>
            <FormControl as="select" value={sortBy} onChange={handleSortByChange}>
              <option value="votes">Votes</option>
              <option value="comments">Comments</option>
            </FormControl>
          </Form.Group>
          <Form.Group controlId="sortOrderSelect">
            <Form.Label>Sort order</Form.Label>
            <FormControl as="select" value={sortOrder} onChange={handleSortOrderChange}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </FormControl>
          </Form.Group>
          <Button variant="primary" onClick={() => sortArticles()}>Sort</Button>
        </Form>
      </Col>
      </Row>
        <Row>
          {sortArticles().map((article) => (
            <Col key={article.article_id} sm={12} md={6} lg={4}>
              <Card>
                <Card.Header>
                  <Card.Title>{article.topic[0].toUpperCase() + article.topic.slice(1, article.topic.length )} news </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Title> <Link to={`/articles/${article.article_id}`} key={article_id}>{article.title}.</Link></Card.Title>
                  <Card.Text className="text-muted">Comments: {article.comment_count}</Card.Text>
                  <Card.Text className="text-muted">{article.votes} votes</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Card.Text className="text-muted">by {article.author}</Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default Articles;
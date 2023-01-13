import { useState } from "react";
import party from "party-js"
import {patchArticleByArticleID} from "../utils/api"
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Vote({votes, articleId}) {
    const [voteChange, setVoteChange] = useState(0)
    const [voted, setVoted] = useState(false)


function incVote() {
    setVoted(false)
    setVoteChange((currVoteChange) => currVoteChange + 1 )
    patchArticleByArticleID(articleId, 1)
    .then(() => setVoted(true))
    .catch((err) => {
            setVoteChange((currVoteChange) => currVoteChange - 1)
            console.error(err, "mitch error")
    });
} 

function decVote() {
    setVoted(false)
    setVoteChange((currVoteChange) => currVoteChange - 1 )
    patchArticleByArticleID(articleId, -1)
    .then(() => setVoted(true))
    .catch((err) => {
            setVoteChange((currVoteChange) => currVoteChange + 1)
            console.error(err, "mitch error")
    });
} 

if (voted) {
    return <ol>
     <p className='voted'>Votes  {votes + voteChange}</p>
     <p className='voted'>Success! 🎉 </p> 
    </ol>
  }


return (
    <Container>
    <Row>
      <Col>
        <section>
          <p>Votes {votes} </p>
          <Button variant="primary" onClick={incVote}>
            👍
          </Button>
          <Button variant="secondary" onClick={decVote}>
            👎
          </Button>
        </section>
      </Col>
    </Row>
  </Container>
);
}


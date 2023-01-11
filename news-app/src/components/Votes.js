import { useState } from "react";
import {patchArticleByArticleID} from "../utils/api"

export default function Vote({votes, articleId}) {
    const [voteChange, setVoteChange] = useState(0)
    const [voted, setVoted] = useState(false)


function incVote() {
    setVoted(false)
    setVoteChange((currVoteChange) => currVoteChange + 1 )
    patchArticleByArticleID(articleId, 1)
    setVoted(true)
    .catch((err) => {
            setVoteChange((currVoteChange) => currVoteChange - 1)
            console.error(err, "mitch error")
    })
} 

function decVote() {
    setVoted(false)
    setVoteChange((currVoteChange) => currVoteChange - 1 )
    patchArticleByArticleID(articleId, - 1)
    setVoted(true)
    .catch((err) => {
            setVoteChange((currVoteChange) => currVoteChange + 1)
            console.error(err, "mitch error")
    })
} 

if (voted) {
    return <ol>
     <p className='voted'>Votes {votes + voteChange}</p>
     <p className='voted'>Thanks for casting your vote! ✅</p> 
    </ol>
  }

return (
    <section>
        <p>Votes {votes + voteChange} </p>
        <button onClick={incVote}> upVote this article!</button>
        <button onClick={decVote}> downVote this article!</button>
    </section>
)
}


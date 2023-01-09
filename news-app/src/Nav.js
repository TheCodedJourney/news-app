import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getTopics} from "./utils/api"

const Nav = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])


    return (
        <nav className="Nav">
        {topics.map((topic) => (
        <Link 
            to={`/topics/${topic.topic_slug}`}
            key={topic.id} 
        > 
            {topic.topic_slug}
        </Link>
        ))}
        {/* <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/users">Users </Link>
        <span> | </span>
        <Link to="/articles">Articles</Link>
        <span> | </span>
        <Link to="/comments">Comments</Link> */}
    </nav>
    );
};

  export default Nav
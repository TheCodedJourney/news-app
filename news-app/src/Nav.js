import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Articles from "./components/Articles";
import { getArticles, getTopics} from "./utils/api"

const Nav = () => {
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])

    console.log(topics)

    useEffect(() => {
        getTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])


    return (
        <header>
        <nav className="Nav">
        {topics.map((topic) => (
        <Link 
            to={`/articles/${topic.slug}`}
            key={topic.slug} 
        > 
            {topic.slug}
        </Link> 
        ))}
        <Link 
            to={`/articles`}
            key={""}
        > 
            articles
        </Link> 
        <Link 
            to={`/users`}
             
        > 
            users
        </Link> 
        <Link 
            to={`/comments`}
             
        > 
            comments
        </Link> 
    </nav>
    </header>
    );
};

  export default Nav










        {/* <Link to="/home">Home</Link>
        <span> | </span> 
        <Link to="/users">Users </Link>
        <span> | </span>
        <Link to="/articles" key={""}>Articles</Link>
        <span> | </span>
        <Link to="/comments">Comments</Link> */}
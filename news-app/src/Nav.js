import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Articles from "./components/Articles";
import { getArticles, getTopics} from "./utils/api"

const Nav = () => {
    const [topics, setTopics] = useState([])

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
            to={`/articles/?topic=${topic.slug}`}
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










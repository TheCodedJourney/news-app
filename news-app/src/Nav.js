import { Link } from "react-router-dom"
import { useEffect } from "react";
import { }

useEffect

const Nav = () => {
    return (

    <nav>
        <Link to="/home">Home</Link>
        <span> | </span>
        <Link to="/users">Users </Link>
        <span> | </span>
        <Link to="/articles">Articles</Link>
        <span> | </span>
        <Link to="/comments">Comments</Link>
    </nav>
    );
};

  export default Nav
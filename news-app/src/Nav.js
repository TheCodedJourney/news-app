import { Navbar, Nav} from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Articles from "./components/Articles";
import { getArticles, getTopics} from "./utils/api"

const Navigation = () => {
    const [topics, setTopics] = useState([])


    useEffect(() => {
        getTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">The News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to={`/articles?topic=coding`}>Coding</Nav.Link>
                <Nav.Link as={Link} to={`/articles?topic=football`}>Football</Nav.Link>
                <Nav.Link as={Link} to={`/articles?topic=cooking`}>Cooking</Nav.Link>
                <Nav.Link as={Link} to={`/articles`}>Articles</Nav.Link>
                <Nav.Link as={Link} to={`/users`}>Users</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }

  export default Navigation
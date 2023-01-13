import theNews from '../src/reactiveNewsLogos/Reactive News-logos.jpeg'
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
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
    <Navbar expand="lg">
        <Navbar.Brand as={Link} to={`/articles`}> Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Dropdown bg="dark">
                <Dropdown.Toggle variant='outline-dark' id="dropdown-basic">
                  Topics
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={`/articles?topic=coding`}>Coding</Dropdown.Item>
                  <Dropdown.Item as={Link} to={`/articles?topic=football`}>Football</Dropdown.Item>
                  <Dropdown.Item as={Link} to={`/articles?topic=cooking`}>Cooking</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Link  as={Link} to={`/users`}>Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}


  export default Navigation
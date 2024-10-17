import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import { Container } from "react-bootstrap"
// import Button from "react-bootstrap/Button"

export default function NavigationBar(){

    return(
        <div className="nav-container">
            <Navbar>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav">
                    <Nav.Link className="nav-text" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-text" href="#intro">Introduction</Nav.Link>
                    <Nav.Link className="nav-text" href="#block2vec">Block2Vec</Nav.Link>
                    <Nav.Link className="nav-text" href="#model">AI Model</Nav.Link>
                    <Nav.Link className="nav-text" hreff="#faq">FAQ</Nav.Link>
                    <Nav.Link className="nav-text" href="#link">Links</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Container } from "react-bootstrap"
// import Button from "react-bootstrap/Button"

export default function NavigationBar(){

    return(

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="nav-container">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link className="nav-text" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-text" href="#about">About</Nav.Link>
            <Nav.Link className="nav-text" href="#block2vec">Block2Vec</Nav.Link>
            <Nav.Link className="nav-text" href="#model">AI Model</Nav.Link>
            <Nav.Link className="nav-text" href="#link">Links</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )

}

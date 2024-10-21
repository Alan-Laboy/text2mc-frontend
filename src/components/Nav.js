import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function NavigationBar(){
    return(
        <div className="nav-container d-flex justify-content-center">
            <Navbar>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav">
                    <Nav.Link className="nav-text" href="/#">Home</Nav.Link>
                    <Nav.Link className="nav-text" href="/#intro">Introduction</Nav.Link>
                    <Nav.Link className="nav-text" href="/#block2vec">Block2Vec</Nav.Link>
                    <Nav.Link className="nav-text" href="/#ai-model">AI Model</Nav.Link>
                    <Nav.Link className="nav-text" href="/#faq">FAQ</Nav.Link>
                    <Nav.Link className="nav-text" href="/#links">Links</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

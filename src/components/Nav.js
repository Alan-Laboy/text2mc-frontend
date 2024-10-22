import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function NavigationBar(){
    return(
        <div className="nav-container d-flex justify-content-center mb-3">
            <Navbar data-bs-theme="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav">
                    <Nav.Link href="/#">Home</Nav.Link>
                    <Nav.Link href="/#intro">Introduction</Nav.Link>
                    <Nav.Link href="/#block2vec">Block2Vec</Nav.Link>
                    <Nav.Link href="/#ai-model">AI Model</Nav.Link>
                    <Nav.Link href="/#faq">FAQ</Nav.Link>
                    <Nav.Link href="/#links">Links</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

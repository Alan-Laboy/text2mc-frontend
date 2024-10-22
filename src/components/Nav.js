import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavigationBar() {
  return (
    <>
      <Navbar className="nav-container mb-3" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#intro">Introduction</Nav.Link>
              <Nav.Link href="/#block2vec">Block2Vec</Nav.Link>
              <Nav.Link href="/#ai-model">AI Model</Nav.Link>
              <Nav.Link href="/#faq">FAQ</Nav.Link>
              <Nav.Link href="/#links">Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

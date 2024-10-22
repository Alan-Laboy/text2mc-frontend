import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavigationBar() {
  return (
    <>
      <Navbar className="nav-container mb-3" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/#">text2mc</Navbar.Brand>
          <Nav classname="me-auto">
            <Nav.Link href="/#intro">Introduction</Nav.Link>
            <Nav.Link href="/#block2vec">Block2Vec</Nav.Link>
            <Nav.Link href="/#ai-model">AI Model</Nav.Link>
            <Nav.Link href="/#faq">FAQ</Nav.Link>
            <Nav.Link href="/#links">Links</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

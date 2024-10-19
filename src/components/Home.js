import AIModel from "./AIModel";
import Block2Vec from "./Block2Vec";
import FAQ from "./FAQ";
import Header from "./Header";
import Introduction from "./Introduction";
import Links from "./Links";
import NavigationBar from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div className="containter">
      <Container fluid>
        <Row>
          <Header />
          <NavigationBar />          
        </Row>
        <Row>
          <Col />
          <Col>
            <Introduction />
            <Block2Vec />
            <AIModel />
            <FAQ />
            <Links />
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Home;

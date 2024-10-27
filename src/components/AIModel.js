import Image from "react-bootstrap/Image";
import Epoch15 from "../images/epochs/epoch-15-cropped.gif";
import Epoch83 from "../images/epochs/epoch-83-cropped.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AIModel() {
  return (
    <div className="mb-5" id="ai-model">
      <h1>AI Model</h1>
      <p>
        Sunt occaecat eiusmod do officia tempor deserunt. Do laborum magna elit
        quis magna aute. Irure duis sunt elit ex ex cupidatat laboris.
      </p>
      <Container>
        <Row>
          <Col className="text-center d-flex align-items-center" xs={12} lg={6}>
            <Image src={Epoch15} alt="Epoch 15" className="epoch-image" />
          </Col>
          <Col className="text-center d-flex align-items-center" xs={12} lg={6}>
            <Image src={Epoch83} alt="Epoch 83" className="epoch-image" />
          </Col>
        </Row>
      </Container>
      <p className="text-center">Two runs of text2mc</p>
    </div>
  );
}

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
        For our AI model, we used a Variational Auto Encoder (VAE) to generate
        new Minecraft builds from our training data. Using a VAE helps generate
        builds that are similar to each other in meaning, like how blocks in
        Block2Vec can be related to each other semantically. An example would be
        houses in our dataset being related to each other to help generate a new
        house or castles being related to each other to generate a new casle.
      </p>
      <Container>
        <Row>
          <Col className="text-center d-flex align-items-center" xs={12} lg={6}>
            <Image src={Epoch15} alt="Epoch 15" fluid />
          </Col>
          <Col className="text-center d-flex align-items-center" xs={12} lg={6}>
            <Image src={Epoch83} alt="Epoch 83" fluid />
          </Col>
        </Row>
      </Container>
      <p className="text-center">Two runs of text2mc</p>
    </div>
  );
}

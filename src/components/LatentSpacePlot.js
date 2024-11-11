import Image from "react-bootstrap/Image";
import LatentPlot from "../images/latent_plot_with_images.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LatentSpacePlot() {
  return (
    <>
      {/* <div className="justify-content-md-center">
        <Image
          src={LatentPlot}
          alt="Graph of Latent Space Plot showing the semantic relationship between each build" 
          className="center-block"
          width={1500}
        />
      </div> */}
      <Container>
        <Row>
          <Col className="text-center d-flex align-items-center justify-content-center">
            <Image
              src={LatentPlot}
              alt="Graph of Latent Space Plot showing the semantic relationship between each build"
              fluid
            />
          </Col>
        </Row>
      </Container>
      <p className="text-center">
        Graph of Latent Space Plot showing the semantic relationship between
        each build
      </p>
    </>
  );
}

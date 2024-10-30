import Image from "react-bootstrap/Image";
import LatentSpacePlot from "../images/latent_plot_with_images.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Block2Vec() {
  return (
    <div className="mb-5" id="Latent Space">
      <h1>Latent Space Plot</h1>
      <p>
        Just like how we can relate blocks semantically, we can relate similar builds semantically too.
      </p>
      <p>
        Some builds are similar to each other. Two castles that are made of stone bricks
        are more similar to each other than they are to a wooden house. These builds are put into the 
        latent space where similar builds are close to each other. A latent space plot helps visually
        show what the latent space looks like.
      </p>
      <p>
        The AI model uses uses this to predict new builds at the points between builds.
      </p>
      {/* <div className="justify-content-md-center">
        <Image
          src={LatentSpacePlot}
          alt="Graph of Latent Space Plot showing the semantic relationship between each build" 
          className="center-block"
          width={1500}
        />
      </div> */}
      <Container>
        <Row>
          <Col className="text-center d-flex align-items-center justify-content-center">
            <Image src={LatentSpacePlot} alt="Graph of Latent Space Plot showing the semantic relationship between each build" fluid />
          </Col>
          
        </Row>
      </Container>
      <p className="text-center">
      Graph of Latent Space Plot showing the semantic relationship 
      between each build
      </p>
    </div>
  );
}

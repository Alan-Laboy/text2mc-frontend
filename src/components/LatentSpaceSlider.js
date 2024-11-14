import Form from "react-bootstrap/Form";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LatentBuildSlider() {
  const IMAGE_DIRECTORY = "/interpolation_slider_images/";
  const IMAGE_NAME = "interpolation_";
  const INITIAL_IMAGE_INDEX = "000";
  const IMAGE_EXTENSION = ".png";
  const interpolationImage = `${IMAGE_DIRECTORY}${IMAGE_NAME}${INITIAL_IMAGE_INDEX}${IMAGE_EXTENSION}`;
  const NUM_INTERPOLATIONS = 60;

  const [interpolationImageSrc, setInterpolationImageSrc] = useState(interpolationImage);
  const [interpolationValue, setInterpolationValue] = useState(0);

  const generateImageIndex = (interpolationValue) => {
    return interpolationValue.toString().padStart(3, '0');
  };

  const updateInterpolation = (event) => {
    const sliderValue = event.target.value;
    setInterpolationValue(sliderValue);
    setInterpolationImageSrc(`${IMAGE_DIRECTORY}${IMAGE_NAME}${generateImageIndex(sliderValue)}${IMAGE_EXTENSION}`);
  };

  return (
    <div>
      <div className="text-center">
        <Image className="interpolations-image" src={interpolationImageSrc} alt="Interpolation of terrain and a house" fluid />
      </div>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={11} md={10} lg={8}>
            <p>Use the slider to see the interpolations of terrain and a house.</p>
            <Form>
              <div>
                <Form.Label>Latent Space Interpolation: {Number(interpolationValue) + 1}</Form.Label>
              </div>
              <Form.Range
                min="0"
                max={NUM_INTERPOLATIONS - 1}
                value={interpolationValue}
                onChange={updateInterpolation}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import Form from "react-bootstrap/Form";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import TestImage from "../images/temporary_image.png";

export default function LatentBuildSlider() {
  const [interpolationValue, setInterpolationValue] = useState(0);
  const [interpolationImageSrc, setInterpolationImageSrc] = useState("");
  const interpolationImages = [TestImage, TestImage, TestImage, TestImage, TestImage];

  const updateInterpolation = (event) => {
    const sliderValue = event.target.value;
    setInterpolationValue(sliderValue);
    setInterpolationImageSrc(interpolationImages[sliderValue]);
  };

  return (
    <div>
      <Image src={interpolationImageSrc} alt="Test image" fluid />
      <Form>
        <Form.Label>Latent Space Interpolation</Form.Label>
        <Form.Range
          min="0"
          max="4"
          value={interpolationValue}
          onChange={updateInterpolation}
        />
      </Form>
    </div>
  );
}

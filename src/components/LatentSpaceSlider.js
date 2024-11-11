import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function LatentBuildSlider() {
  const [interpolationValue, setInterpolationValue] = useState(0);

  return (
    <Form>
      <Form.Label>Latent Space Interpolation</Form.Label>
      <Form.Range
        min="0"
        max="4"
        value={interpolationValue}
        onChange={(event) => {
          setInterpolationValue(event.target.value);
        }}
      />
    </Form>
  );
}

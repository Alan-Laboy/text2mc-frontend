import Form from 'react-bootstrap/Form';

export default function LatentBuildSlider() {
  return ( 
    <div>
      <Form.Label>Latent Space Interpolation</Form.Label>
      <Form.Range min={0} max={5} />
    </div>
  );
}

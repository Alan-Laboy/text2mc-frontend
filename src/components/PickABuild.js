import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import PlaceholderImage from "../images/temporary_image.png"
import { useState, useEffect } from "react";

const buildingImages = [
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage,
  PlaceholderImage
]

export default function PickABuild() {
    const disabled_arr = new Array(10).fill(false);
    const [disabled, setDisabled] = useState(disabled_arr);
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState(buildingImages[0]);
    const maxSelect = 2;

    const handleButtonClick = (buttons) => {
        if (buttons.length === maxSelect) {
            disabled_arr.fill(true);
            disabled_arr[buttons[0] - 1] = false;
            disabled_arr[buttons[1] - 1] = false;
            setDisabled(disabled_arr);
            setVisible(true);
            console.log(buttons);

            setImage(buildingImages[buttons[0] - 1]);
        }
        else {
            setDisabled(false);
        }
   };

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */


  return (
    <div>
      <h1>Pick A Build</h1>
    <ToggleButtonGroup type="checkbox" onChange={handleButtonClick} className="mb-5 text-center d-flex align-items-center">
      <ToggleButton variant="outline-secondary" id="tbg-btn-1" size="lg" value={1} disabled={disabled[0]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
      </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-2" size="lg" value={2} disabled={disabled[1]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-3" size="lg" value={3} disabled={disabled[2]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-4" size="lg" value={4} disabled={disabled[3]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-5" size="lg" value={5} disabled={disabled[4]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-6" size="lg" value={6} disabled={disabled[5]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-7" size="lg" value={7} disabled={disabled[6]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton  variant="outline-secondary"id="tbg-btn-8" size="lg" value={8} disabled={disabled[7]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-9" size="lg" value={9} disabled={disabled[8]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-btn-10" size="lg" value={10} disabled={disabled[9]}>
          <Image src={PlaceholderImage} alt="Placeholder Image" className="build-image" />
        </ToggleButton>
    </ToggleButtonGroup>
    {
        visible && (
          <div className="d-flex justify-content-center"> 
            <Image src={image} alt="Placeholder Image" className="placeholder-image" />
          </div>
        )
    }
   </div>
  );
}
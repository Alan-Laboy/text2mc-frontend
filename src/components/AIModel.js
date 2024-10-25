import Image from "react-bootstrap/Image";
import Epoch15 from "../images/epochs/epoch-15-cropped.gif";
import Epoch83 from "../images/epochs/epoch-83-cropped.gif";

export default function AIModel() {
    return (
        <div className="mb-5" id="ai-model">
            <h1>AI Model</h1>
            <p>Sunt occaecat eiusmod do officia tempor deserunt. Do laborum magna elit quis magna aute. Irure duis sunt elit ex ex cupidatat laboris.</p>
            <div className="d-flex justify-content-around">
                <Image src={Epoch15} alt="Epoch 15" className="epoch-image" />
                <Image src={Epoch83} alt="Epoch 83" className="epoch-image" />
            </div>
            <p className="text-center">Two sample runs of text2mc.</p>
        </div>
    );
}
import "./styles.css";
import Image from "react-bootstrap/Image";
import Epoch15 from "./images/epoch_15.gif";
import Epoch83 from "./images/epoch_83.gif";

export default function Introduction() {
  return (
    <div className="mb-5" id="intro">
      <h1>Introduction</h1>
      <p>text2mc is the first tool to generate buildings in Minecraft with Generative AI.</p>
      <p>It is built upon multiple components that rely on each other:</p>
      <ul>
        <li>Web Scraper which downloads builds from PlanetMinecraft to have training data for the model.</li>
        <li>Data Processor which converts Minecraft buildings into a file that an AI model can read.</li>
        <li>AI Model which learns from our training data to output new builds.</li>
        <li>Web Application for users to be able to generate and interact with buildings at the click of a button.</li>
      </ul>
      <div className="d-flex justify-content-evenly">
        <Image src={Epoch15} alt="Epoch 15" className="epoch-image" />
        <Image src={Epoch83} alt="Epoch 83" className="epoch-image" />
      </div>
      <div className="d-flex justify-content-center">
        <p>Two sample runs of text2mc.</p>
      </div>
    </div>
  );
}

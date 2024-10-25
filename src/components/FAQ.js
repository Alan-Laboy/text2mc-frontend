import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default function FAQ() {
    return (
        <div className="mb-5" id="faq">
            <h1>Frequently Asked Questions</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What was the inspiration for text2mc?</Accordion.Header>
                <Accordion.Body>The inspiration for text2mc came from a research paper called <Link to="https://arxiv.org/abs/2106.10155">World-GAN</Link> which has an image of a village being generated with Generative AI, thus inspiring the creation of Minecraft builds with Generative AI.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What was the inspiration for text2mc?</Accordion.Header>
                <Accordion.Body>Ryan was here and put placeholder text here.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How did you do this project?</Accordion.Header>
                <Accordion.Body>Ryan was not here but there is placeholder text already here!</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
    );
}
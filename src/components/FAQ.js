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
                <Accordion.Header>Can text2mc help me build Minecraft buildings?</Accordion.Header>
                <Accordion.Body>Yes.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What kind of buildings are generated?</Accordion.Header>
                <Accordion.Body>Land structures.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What version of Minecraft will text2mc creations work with?</Accordion.Header>
                <Accordion.Body>The latest version of Minecraft: Java Edition.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>What are the requirements to run text2mc?</Accordion.Header>
                <Accordion.Body>A computer, web browser, internet connection, and Minecraft: Java Edition.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>How do I load generated buildings in Minecraft?</Accordion.Header>
                <Accordion.Body>The generated buildings are stored as a .schem file which can be loaded with World Edit.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Is this project open-source or available for collaboration?</Accordion.Header>
                <Accordion.Body>
                  Yes! The source code for text2mc is available on GitHub:
                  <li>
                    <Link to="https://github.com/shauncomino/text2mc-dataprocessor">text2mc Data Processor</Link>
                  </li>
                  <li>
                    <Link to="https://github.com/Alan-Laboy/text2mc-frontend">text2mc Frontend</Link>
                  </li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>When will text2mc be released?</Accordion.Header>
                <Accordion.Body>Soon (TM). It will be released whenever the tool is finished.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
    );
}
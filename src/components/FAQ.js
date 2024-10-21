import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
    return (
        <div className="mb-5" id="faq">
            <h1>Frequently Asked Questions</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How did you retrieve the data for the AI Model?</Accordion.Header>
                <Accordion.Body>We got maps from PlanetMinecraft and did computer magic.</Accordion.Body>
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
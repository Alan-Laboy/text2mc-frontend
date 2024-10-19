import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
    return (
        <div id="faq">
            <h1>Frequently Asked Questions</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Question 1</Accordion.Header>
                <Accordion.Body>Duis deserunt ex esse amet nulla voluptate est et.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Question 2</Accordion.Header>
                <Accordion.Body>Duis deserunt ex esse amet nulla voluptate est et.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Question 3</Accordion.Header>
                <Accordion.Body>Duis deserunt ex esse amet nulla voluptate est et.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </div>
    );
}
import "./styles.css";

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
    </div>
  );
}

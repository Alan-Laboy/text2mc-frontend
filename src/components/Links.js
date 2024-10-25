import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="mb-5" id="links">
      <h1>Links</h1>
      <ul>
        <li>
        <Link to="https://github.com/shauncomino/text2mc-dataprocessor">text2mc dataprocessor</Link>
        </li>
        <li>
            <Link to="https://github.com/Alan-Laboy/text2mc-frontend">text2mc frontend</Link>
        </li>
        <li>
            <Link to="https://github.com/Mawiszus/World-GAN">World-GAN</Link>
        </li>
        <li>
            <Link to="https://www.planetminecraft.com/">Planet Minecraft</Link>
        </li>
      </ul>
    </div>
  );
}

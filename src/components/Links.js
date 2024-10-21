import { Link } from "react-router-dom";

export default function Links() {
    return (
        <div className="mb-5 flex-col" id="links">
            <h1>Links</h1>
            <div>
                <Link to="https://github.com/shauncomino/text2mc-dataprocessor">text2mc dataprocessor</Link>
            </div>
            <div>
                <Link to="https://github.com/Alan-Laboy/text2mc-frontend">text2mc frontend</Link>
            </div>
            <div>
                <Link to="https://github.com/Mawiszus/World-GAN">World-GAN</Link>
            </div>
        </div>
    );
}
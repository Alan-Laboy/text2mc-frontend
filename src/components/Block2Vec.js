import Image from "react-bootstrap/Image";
import Embeddings1 from "../images/embeddings/embeddings_scatterplot_2d.png";
import Embeddings2 from "../images/embeddings/embeddings_scatterplot_2d_1.png";

export default function Block2Vec() {
    return (
        <div className="mb-5" id="block2vec">
            <h1>Block2Vec</h1>
            <p>Veniam aute tempor non mollit laboris non velit. Tempor officia anim fugiat labore ad culpa ipsum eiusmod dolor reprehenderit dolor tempor ipsum aliquip. Voluptate adipisicing adipisicing cupidatat ut tempor ad consectetur sunt. Sit amet enim ex irure.</p>
            <div className="text-center">
                <Image src={ Embeddings1 } alt="Graph of Minecraft blocks showing the semantic relationship between each block" className="embeddings-image" />
            </div>
            <p className="text-center">Graph of Minecraft blocks showing the semantic relationship between each block</p>
        </div>
    );
}
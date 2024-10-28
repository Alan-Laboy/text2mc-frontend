import Image from "react-bootstrap/Image";
import Embeddings from "../images/embeddings/embeddings_scatterplot_2d.png";

export default function Block2Vec() {
  return (
    <div className="mb-5" id="block2vec">
      <h1>Block2Vec</h1>
      <p>
        In Minecraft, buildings often have a certain type of architecture or
        theme to them.
      </p>
      <p>
        We can relate blocks semantically based on their role in specific
        buildings.
      </p>
      <p>
        An example would be a simple starter house. It has a floor made of
        cobblestone, walls made of wooden planks, and a roof with cobblestone
        stairs. All of these blocks have a meaning that can be related
        semantically.
      </p>
      <p>
        To help with training our AI model, we have calculated the relations of
        all Minecraft blocks from our dataset of 10,000+ builds.
      </p>
      <div className="text-center">
        <Image
          src={Embeddings}
          alt="Graph of Minecraft blocks showing the semantic relationship between each block"
          className="embeddings-image"
        />
      </div>
      <p className="text-center">
        Graph of Minecraft blocks showing the semantic relationship between each
        block
      </p>
    </div>
  );
}

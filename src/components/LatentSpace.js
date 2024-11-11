import LatentSpacePlot from "./LatentSpacePlot";
import LatentBuildSlider from "./LatentSpaceSlider";

export default function Block2Vec() {
  return (
    <div className="mb-5" id="Latent Space">
      <h1>Latent Space</h1>
      <p>
        Just like how we can relate blocks semantically, we can relate similar
        builds semantically too.
      </p>
      <p>
        Some builds are similar to each other. Two castles that are made of
        stone bricks are more similar to each other than they are to a wooden
        house. These builds are put into the latent space where similar builds
        are close to each other. A latent space plot helps visually show what
        the latent space looks like.
      </p>
      <p>
        The AI model uses uses this to predict new builds at the points between
        builds.
      </p>
      <LatentSpacePlot />
      <LatentBuildSlider />
    </div>
  );
}

import "./styles.css";
import Image from "react-bootstrap/Image";
import Epoch15 from "./images/epoch_15.gif";
import Epoch83 from "./images/epoch_83.gif";

export default function Introduction() {
  return (
    <div className="mb-5" id="intro">
      <div className="">
        <h1>Introduction</h1>
      </div>
      <div className="">
        <p>This is a placeholder text2mc.</p>
        <p>
          Velit magna enim ipsum pariatur. Id eu dolor incididunt laborum enim
          occaecat magna laborum commodo laboris nulla. Et quis ad ullamco nulla
          adipisicing incididunt eiusmod elit.
        </p>
        <p>
          Ea ipsum ipsum reprehenderit dolore ex ut officia tempor esse enim do
          ut id. Culpa voluptate est non Lorem. Esse deserunt anim ullamco velit
          adipisicing. Officia nisi cupidatat nulla fugiat irure cillum
          consectetur Lorem velit laborum ut irure.
        </p>
        <div className="d-flex justify-content-evenly">
          <Image src={Epoch15} alt="Epoch 15" className="epoch-image" />
          <Image src={Epoch83} alt="Epoch 83" className="epoch-image" />
        </div>
        <p>
          Velit magna enim ipsum pariatur. Id eu dolor incididunt laborum enim
          occaecat magna laborum commodo laboris nulla. Et quis ad ullamco nulla
          adipisicing incididunt eiusmod elit.
        </p>
        <p>
          Ea ipsum ipsum reprehenderit dolore ex ut officia tempor esse enim do
          ut id. Culpa voluptate est non Lorem. Esse deserunt anim ullamco velit
          adipisicing. Officia nisi cupidatat nulla fugiat irure cillum
          consectetur Lorem velit laborum ut irure.
        </p>
        <p>
          Et laborum reprehenderit pariatur cupidatat eu aliqua mollit et in.
          Reprehenderit eu incididunt est minim adipisicing laboris consequat
          fugiat elit eiusmod proident et voluptate aliqua. Quis id duis
          excepteur ex deserunt sint aute adipisicing in commodo consectetur qui
          amet aliqua. Sint adipisicing est et occaecat eiusmod officia enim
          magna. Magna excepteur irure et ipsum duis consectetur commodo laborum
          est esse proident Lorem sunt. Magna quis exercitation exercitation
          culpa nulla fugiat dolor quis sit aliqua ea voluptate sunt culpa.
        </p>
      </div>
    </div>
  );
}

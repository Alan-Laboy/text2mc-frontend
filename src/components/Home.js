
import AIModel from './AIModel';
import Block2Vec from './Block2Vec';
import Header from './Header';
import Introduction from './Introduction';
import NavigationBar from './Nav';

function Home() {
  return (
    <div className='containter'>
        <Header />
        <NavigationBar />
        <Introduction />
        <Block2Vec />
        <AIModel />
    </div>
  );
}

export default Home;
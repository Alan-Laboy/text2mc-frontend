
import AIModel from './AIModel';
import Block2Vec from './Block2Vec';
import FAQ from './FAQ';
import Header from './Header';
import Introduction from './Introduction';
import Links from './Links';
import NavigationBar from './Nav';

function Home() {
  return (
    <div className='containter'>
        <Header />
        <NavigationBar />
        <Introduction />
        <Block2Vec />
        <AIModel />
        <FAQ />
        <Links />
    </div>
  );
}

export default Home;
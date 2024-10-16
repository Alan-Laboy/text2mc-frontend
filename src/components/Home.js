
import Header from './Header';
import Introduction from './Introduction';
import NavigationBar from './Nav';

function Home() {
  return (
    <div className='containter'>
        <Header />
        <NavigationBar />
        <Introduction />
    </div>
  );
}

export default Home;
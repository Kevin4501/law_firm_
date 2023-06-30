import logo from './logo.svg';
import './App.css';
import './style.css';
import Cover from './Coverpage/Cover';
import Introduce from './Introduce/Introduce';
import Choose from './Choose/Choose';
import AreaOfPractice from './AreaOfPractice/AreaOfPractice';
import Clients from './Clients/Clients';
import Team from './Team/Team';
import Faq from './Faq/Faq';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
     <Cover></Cover>
     <Introduce></Introduce>
     <Choose></Choose>
     <AreaOfPractice></AreaOfPractice>
     <Clients></Clients>
     <Team></Team>
     <Faq></Faq>
     <Subscribe></Subscribe>
     <Footer></Footer>
    </div>
  );
}

export default App;

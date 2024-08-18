import './App.css';
import { FooterComponent } from './Components/FooterComponent';
import { HeaderComponent } from './Components/HeaderComponent';
import { MainComponent } from './Components/MainComponent';
import { MainSectionFive } from './Components/MainSectionFive';
import { MainSectionFour } from './Components/MainSectionFour';
import { MainSectionOne } from './Components/MainSectionOne';
import { MainSectionThree } from './Components/MainSectionThree';
import { MainSectionTwo } from './Components/MainSectionTwo';

function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <MainComponent/>
     <MainSectionOne/>
     <MainSectionTwo/>
     <MainSectionThree/>
     <MainSectionFour/>
     <MainSectionFive/>
     <FooterComponent/>
    </div>
  );
}

export default App;

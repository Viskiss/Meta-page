import "./App.scss";
import Header from "./Modules/Header/Header";
import DecorateSp from "./Modules/Info/Info";
import Label from "./Modules/Label/Label";
import Spacer from "./Modules/Spacer/Spacer";
import Story from "./Modules/Story/Story";
import Team from "./Modules/Team/Team";
import WaveNft from "./Modules/WaveNft/WaveNft";
import Wind from "./Modules/Wind/Wind";

function App() {
  return <div className="App">
    <Header/>
    <Label/>
    <WaveNft/>
    <Spacer/>
    <Team/>
    <Story/>
    <Wind/>
    <DecorateSp/>

  </div>;
}

export default App;

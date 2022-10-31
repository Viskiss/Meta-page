import "./App.css";
import Header from "./Modules/Header/Header";
import Label from "./Modules/Label/Label";
import Spacer from "./Modules/Spacer/Spacer";
import Team from "./Modules/Team/Team";
import WaveNft from "./Modules/WaveNft/WaveNft";

function App() {
  return <div className="App">
    <Header/>
    <Label/>
    <WaveNft/>
    <Spacer/>
    <Team/>

  </div>;
}

export default App;

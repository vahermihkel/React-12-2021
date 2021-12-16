import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menüü from './Components/Menüü';
import Admin from './Pages/Admin';
import Kodu from './Pages/Kodu';
import LisaToode from './Pages/LisaToode';
import MuudaEse from './Pages/MuudaEse';
import Ostukorv from './Pages/Ostukorv';
import ÜksEse from './Pages/ÜksEse';

function App() {
  return (
    <div>
      <Menüü />
      <Routes>
        <Route path="/" exact element={<Kodu />} />
        <Route path="/ostukorv" exact element={<Ostukorv />} />
        <Route path="/lisa" exact element={<LisaToode />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/toode/:tooteNimetus" exact element={<ÜksEse />} />
        <Route path="/muuda/:tooteNimetus" exact element={<MuudaEse />} />
      </ Routes>
      {/* <div>FOOTER</div> */}
    </div>
  );
}

export default App;

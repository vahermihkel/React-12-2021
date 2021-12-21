import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menüü from './Components/Menüü';
import Admin from './Pages/Admin/Admin';
import Kodu from './Pages/Kodu';
import LisaToode from './Pages/Admin/LisaToode';
import MuudaEse from './Pages/Admin/MuudaEse';
import Ostukorv from './Pages/Ostukorv';
import ÜksEse from './Pages/ÜksEse';
import AdminEsemeteList from './Pages/Admin/AdminEsemeteList';
import Kategooriad from './Pages/Admin/Kategooriad';

function App() {
  return (
    <div>
      <Menüü />
      <Routes>
        <Route path="/" exact element={<Kodu />} />
        <Route path="/ostukorv" exact element={<Ostukorv />} />
        <Route path="/lisa" exact element={<LisaToode />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/admin-esemed" exact element={<AdminEsemeteList />} />
        <Route path="/kategooriad" exact element={<Kategooriad />} />
        <Route path="/toode/:tooteNimetus" exact element={<ÜksEse />} />
        <Route path="/muuda/:tooteNimetus" exact element={<MuudaEse />} />
      </ Routes>
      {/* <div>FOOTER</div> */}
    </div>
  );
}

export default App;

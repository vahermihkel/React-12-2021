import { Route, Routes } from 'react-router';
import './App.css';
import Menüü from './Components/Menüü';
import Kodu from './Pages/Kodu';
import Ostukorv from './Pages/Ostukorv';

function App() {
  return (
    <div>
      <Menüü />
      <Routes>
        <Route path="/" exact element={<Kodu />} />
        <Route path="/ostukorv" exact element={<Ostukorv />} />
      </ Routes>
      <div>FOOTER</div>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import AddProduct from './Pages/Admin/AddProduct';
import AdminHome from './Pages/Admin/AdminHome';
import EditProduct from './Pages/Admin/EditProduct';
import ViewProducts from './Pages/Admin/ViewProducts';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ostukorv" exact element={<Cart />} />
        <Route path="/toode/:id" exact element={<SingleProduct />} />
        <Route path="/admin" exact element={<AdminHome />} />
        <Route path="/admin/lisa-toode" exact element={<AddProduct />} />
        <Route path="/admin/muuda/:id" exact element={<EditProduct />} />
        <Route path="/admin/tooted" exact element={<ViewProducts />} />
      </Routes>
    </div>
  );
}

export default App;

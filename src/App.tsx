import Catalog from './Pages/Catalog/Catalog';
import Basket from './Pages/Basket/Basket';
import ProductDetail from './Pages/Detail/ProductDetail';
import NotFound from './Pages/404/404';
import { Routes, Route } from 'react-router-dom';
import './App.scss'


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/basket/:id' element={<ProductDetail />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
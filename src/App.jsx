/* eslint-disable react-hooks/exhaustive-deps */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Products} from './pages/Products'
import {AddProduct} from './pages/AddProduct'
import {EditProduct} from './pages/EditProduct'
import {ShowProduct} from './pages/ShowProduct'
import { StoreProvider } from './contexts/storeContext'

function App() {
  return(
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route path="/product/add" element={<AddProduct />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;

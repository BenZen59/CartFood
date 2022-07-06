import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const { cart: products } = useSelector((state) => state);
  console.log(products);

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/sandwich' element={'NANA'} />
        </Routes>
        {products.map((product) => (
          <div>
            {product.name}
            <br />
            {product.category}
            <br />
            Prix : {product.unitPrice}
            <br />
            Quantité : {product.quantity}
            <br />
            <br />
          </div>
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const { cart: products } = useSelector((state) => state);
  console.log(products);

  const sandwiches = products.filter(
    (product) => product.category === 'Sandwich'
  );

  const boissons = products.filter((product) => product.category === 'Boisson');

  const desserts = products.filter((product) => product.category === 'Dessert');

  return (
    <BrowserRouter>
      <div className='Header'>
        <NavLink to='/' activeClassName='Header_link--active'>
          Accueil
        </NavLink>
        <NavLink to='/sandwich' activeClassName='Header_link--active'>
          Sandwich
        </NavLink>
        <NavLink to='/boisson' activeClassName='Header_link--active'>
          Boisson
        </NavLink>
        <NavLink to='/dessert' activeClassName='Header_link--active'>
          Dessert
        </NavLink>
      </div>
      <div className='App'>
        <Routes>
          <Route path='/' element={'Accueil'} exact />
          <Route
            path='/sandwich'
            element={sandwiches.map((sandwitch) => (
              <div>
                {sandwitch.name}
                <br />
                {sandwitch.category}
                <br />
                Prix : {sandwitch.unitPrice}
                <br />
                Quantité : {sandwitch.quantity}
                <br />
                <br />
              </div>
            ))}
          />
          <Route
            path='/boisson'
            element={boissons.map((boisson) => (
              <div>
                {boisson.name}
                <br />
                {boisson.category}
                <br />
                Prix : {boisson.unitPrice}
                <br />
                Quantité : {boisson.quantity}
                <br />
                <br />
              </div>
            ))}
          />
          <Route
            path='/dessert'
            element={desserts.map((dessert) => (
              <div>
                {dessert.name}
                <br />
                {dessert.category}
                <br />
                Prix : {dessert.unitPrice}
                <br />
                Quantité : {dessert.quantity}
                <br />
                <br />
              </div>
            ))}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

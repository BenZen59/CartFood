import './App.scss';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cart from './cart.js';

const mapStateToProps = (state) => ({
  light: state,
});

function App({ light, dispatch }) {
  const sandwiches = cart.filter((product) => product.category === 'Sandwich');
  const boissons = cart.filter((product) => product.category === 'Boisson');
  const desserts = cart.filter((product) => product.category === 'Dessert');

  return (
    <BrowserRouter>
      <div className='header'>
        <NavLink
          to='/'
          className='headerLink'
          style={({ isActive }) => ({
            background: isActive ? 'aliceblue' : '#dce4eb',
          })}
        >
          Accueil
        </NavLink>
        <NavLink
          to='/sandwich'
          className='headerLink'
          style={({ isActive }) => ({
            background: isActive ? 'aliceblue' : '#dce4eb',
          })}
        >
          Sandwich
        </NavLink>
        <NavLink
          to='/boisson'
          className='headerLink'
          style={({ isActive }) => ({
            background: isActive ? 'aliceblue' : '#dce4eb',
          })}
        >
          Boisson
        </NavLink>
        <NavLink
          to='/dessert'
          className='headerLink'
          style={({ isActive }) => ({
            background: isActive ? 'aliceblue' : '#dce4eb',
          })}
        >
          Dessert
        </NavLink>
      </div>
      <div className='App'>
        <Routes>
          <Route path='/' element={'Accueil'} exact />
          <Route
            path='/sandwich'
            element={
              <div className='carte'>
                {sandwiches.map((sandwitch) => (
                  <div className='carteItem'>
                    <p>{sandwitch.name}</p>
                    <p>Prix : {sandwitch.unitPrice} €</p>
                    <p>Quantité : {sandwitch.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() => dispatch({ type: 'ADD_CART' })}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                ))}
              </div>
            }
          />
          <Route
            path='/boisson'
            element={
              <div className='carte'>
                {boissons.map((boisson) => (
                  <div className='carteItem'>
                    <p>{boisson.name}</p>
                    <p>Prix : {boisson.unitPrice} €</p>
                    <p>Quantité : {boisson.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() => dispatch({ type: 'ADD_CART' })}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                ))}
              </div>
            }
          />

          <Route
            path='/dessert'
            element={
              <div className='carte'>
                {desserts.map((dessert) => (
                  <div className='carteItem'>
                    <p>{dessert.name}</p>
                    <p>Prix : {dessert.unitPrice} €</p>
                    <p>Quantité : {dessert.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() => dispatch({ type: 'ADD_CART' })}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                ))}
              </div>
            }
          />
        </Routes>
        <div className='cartZone'>
          {light.map((event) => (
            <div>
              <p>{event.nom}</p>
              <p>{event.age}</p>
            </div>
          ))}
          <button
            className='cancel'
            onClick={() => dispatch({ type: 'CANCEL' })}
          >
            Annuler
          </button>
          <button className='pay' onClick={() => dispatch({ type: 'PAY' })}>
            Valider et payer
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps)(App);

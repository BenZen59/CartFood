import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cart from './cart.js';
import Commande from './commande';

function App() {
  let panier = new Commande();
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
                    <p>Prix : {sandwitch.price} €</p>
                    <p>Quantité : {sandwitch.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() =>
                        panier.add({
                          id: sandwitch.id,
                          name: sandwitch.name,
                          price: sandwitch.price,
                        })
                      }
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
                    <p>Prix : {boisson.price} €</p>
                    <p>Quantité : {boisson.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() =>
                        panier.add({
                          id: boisson.id,
                          name: boisson.name,
                          price: boisson.price,
                        })
                      }
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
                    <p>Prix : {dessert.price} €</p>
                    <p>Quantité : {dessert.quantity}</p>
                    <button
                      className='ajouter'
                      onClick={() =>
                        panier.add({
                          id: dessert.id,
                          name: dessert.name,
                          price: dessert.price,
                        })
                      }
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
          {/* affichage panier ici */}
          <button className='cancel'>Annuler</button>
          <button className='pay'>Valider et payer</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { connect } from 'react-redux';
import './cart.scss';

const mapStateToProps = (state) => ({
  light: state,
});

const LightComponent = ({ light, dispatch }) => (
  <div className='cartZone'>
    <button className='cancel' onClick={() => dispatch({ type: 'CANCEL' })}>
      Annuler
    </button>
    <button className='pay' onClick={() => dispatch({ type: 'PAY' })}>
      Valider et payer
    </button>
  </div>
);

export default connect(mapStateToProps)(LightComponent);

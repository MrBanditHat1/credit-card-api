
import './payment.scss';
import Shade from './components/shade/shade.js';
import Form from './components/form/form.js';
import Cards from './components/cards/cards.js';
import Confirmation from './components/confirmation/confirmation.js';
import {useState} from 'react';

function Payment() {

  const [values, setValues] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
    toggle: false
  });

  return (
    <div className="page">
      <Shade />
      <Cards values = {values} />
      {values.toggle ? <Confirmation /> : <Form setValues = {setValues} values = {values}/>}
    </div>
  );
}

export default Payment;


/*
      <form className = 'form'>
        <div className = 'form__name'>
          <h3 className = 'form__name__title' >CARDHOLDER NAME</h3>
          {inputAttributes.map((input) =>{
          <FormInput
            className = 'form__name__input'
            key = {input.id}
            {...input}
            value = {values[input.name]}
            onChange = {HandleChange}
          />
        })}
        </div>
      </form>
*/
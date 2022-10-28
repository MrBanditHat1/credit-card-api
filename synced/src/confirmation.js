import './confirmation.scss';
import curve from './assets/pattern-background-desktop.svg';
import image from './assets/illustration-hero.svg';
import audio from './assets/icon-music.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/slices/counterSlice';
import { Link } from 'react-router-dom';

function Confirmation(){
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const Reset = () =>{
    dispatch(reset())
  }

  return (
    <div className="App">
      <img className = 'curve' src = {curve} />

      <div className = 'card-container'>
        <div className = 'card-container__card'>
          <img className = 'card-container__card__image' src = {image}/>

          <div className = 'card-container__card__text-container'>
            <h1 className = 'card-container__card__text-container__title'> Order Summary </h1>
            <p className = 'card-container__card__text-container__description'>
              Thank you for your selection! Once you submit your payment information, a confirmation
              email will be sent to you with the details of your order.
            </p>
          </div>

          <div className = 'card-container__card__info-container'>
          
            <div className = 'card-container__card__info-container__text'>
              <h3>Total Cost</h3>
              <p>{`${(count)*125}.00`}</p>
            </div>
            <Link onClick = {Reset} className = 'card-container__card__info-container__link' to = '/'>
              Change Items
            </Link>
            
          </div>

          <div className = 'card-container__card__buttons'>
            <Link onClick = {Reset} className = 'card-container__card__buttons__proceed' to = '/payment'>
              Proceed to Payment
            </Link>
            <Link onClick = {Reset} className = 'card-container__card__buttons__cancel' to ='/'>
              Cancel Order
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;

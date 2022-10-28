import './confirmation.scss';
import ConfirmLogo from '../../assets/icon-complete.svg';
import { Link } from 'react-router-dom';



function Confirmation(props){

    const {values} = props;

    return(
        <div className = 'confirmation'>
            <img className = 'confirmation__img' src ={ConfirmLogo}/>
            <div className  ='confirmation__text'>
                <h1 className = 'confirmation__text__title'>THANK YOU!</h1>
                <p className = 'confirmation__text__description'>We've added your card details</p>
            </div>
            <Link className = 'confirmation__btn' to ='/'>
                Continue
            </Link>
       
        </div>
    )
}






export default Confirmation;
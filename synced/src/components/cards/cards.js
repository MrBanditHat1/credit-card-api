import './cards.scss';
import cardFront from '../../assets/card-front.png';
import cardBack from '../../assets/card-back.png';
import cardLogo from '../../assets/card-logo.svg';


function Cards(props){

    const {values} = props;
    let modifiedNumber = values.number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'') //this was copy and pasted from a post online
    
    return(
        <div className = 'cards'>
            <img className = 'cards__front' src = {cardFront}/>
            <img className = 'cards__back' src = {cardBack} />
            <div className = 'cards__text-front'>
            <img className = 'cards__text-front__img' src ={cardLogo}/>
            <h3 className = 'cards__text-front__num'>{modifiedNumber}</h3>
            <h3 className = 'cards__text-front__name'>{values.name}</h3>
            <h3 className = 'cards__text-front__exp'>{`${values.month}/${values.year}`}</h3>
            </div>
            <div className = 'cards__text-back'>
            <h3 className = 'cards__text-back__cvc'>{values.cvc}</h3>
            </div>
        </div>
    )
}



export default Cards;
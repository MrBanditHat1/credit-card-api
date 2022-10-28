import './buyPage.scss';
import logo from './assets/logo.svg';
import iconCart from './assets/icon-cart.svg';
import christian from './assets/christian.png';
import preview from './assets/preview.jpg';
import previewThumbnail from './assets/preview-thumbnail.jpg';
import imageTwo from './assets/image-product-2.jpg';
import imageTwoThumbnail from './assets/image-product-2-thumbnail.jpg';
import imageThree from './assets/image-product-3.jpg';
import imageThreeThumbnail from './assets/image-product-3-thumbnail.jpg';
import imageFour from './assets/image-product-4.jpg';
import imageFourThumbnail from './assets/image-product-4-thumbnail.jpg';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';
import next from './assets/next.svg';
import previous from './assets/previous.svg';
import deleteIcon from './assets/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/slices/counterSlice';
import { Link } from 'react-router-dom';

import {useState} from 'react'
function BuyPage() {

  const dispatch = useDispatch()
  const [flip, setFlip] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageValue, setImageValue] = useState(false)
  const [itemFlip, setItemFlip] = useState(false)
  const [count, setCount] = useState(0)

  const SliderData = [
    {
      image: preview
    },
    {
      image: imageTwo
    },
    {
      image: imageThree
    },
    {
      image: imageFour
    },
  ]
  const SliderDataThumbnail = [
    {
      image: previewThumbnail
    },
    {
      image: imageTwoThumbnail
    },
    {
      image: imageThreeThumbnail
    },
    {
      image: imageFourThumbnail
    },
  ]

  const [current, setCurrent] = useState(0)
  const length = SliderData.length

  const NextSlide = () =>{
    setCurrent(current === length - 1? 0: current +1)
  }
  //The Prev and Next functions update the value of current based on the length of the SliderData variable, A.K.A the amount of images
  const PrevSlide = () =>{
    setCurrent(current === 0? length - 1: current - 1)
  }

  const CartToggle = () =>{
    setFlip(!flip)
  }

  const ItemToggle = () =>{
    if(count ===0){
      return
    }
    setItemFlip(true)
  }

  const Reset = () =>{
    setCount(0)
    dispatch(reset())
  }

  const DeleteCart = () =>{
    Reset()
    setItemFlip(false)
  }

  const AddCount = () =>{
    setCount(count + 1)
    dispatch(increment())
  }
  const SubractCount = () =>{
    if (count === 0){
      return
    }
    setCount(count - 1)
    dispatch(decrement())
    
  }
  const HandleImageValue = () =>{
    setImageValue(!imageValue)
  }

  const GoToSlide =(slideIndex) =>{
    console.log(slideIndex)
    setCurrent(slideIndex)
    if(imageValue === false){
      HandleImageValue(!imageValue)
    }
  }

  const ToConfirmationPage = ()=>{
    return <Link to ='/confirmation'></Link>
  }

// if(result === 'popup-cart' || result === 'popup-cart__button' || result === 'nav__buttons__cart' || result === 'popup-cart__text__title' || result === 'popup-cart__text') I was really going to do this shit
  const HandleFocus = (e) =>{
    let result = document.getElementsByClassName(e.target.className)[0].className // This can be used if you need to access through a global variable
    let secondResult = e.target.className
    console.log(secondResult)
    /*if(result === 'popup-cart'){ //if result is anything else other than popup-cart, setFlip(true), keep the cart open
      console.log('flip will remain true')
      return
    }*/
    if(imageValue === true){
      if(secondResult.includes('image') || secondResult.includes('arrow') || secondResult.includes('dots')){ 
        return
      } 
      HandleImageValue()
    }
    if(secondResult.includes('popup-cart')){ 
      return
    } 
    if(flip === false){
      return
    }
   
    setFlip(!flip)
  }

  return (
    <div className = 'page'  tabIndex={-1} image-value = {imageValue.toString()} onClick={HandleFocus}>

      <div image-value = {imageValue.toString()} className = 'slider'>
        <img src = {previous} className='slider__left-arrow' onClick={PrevSlide}/>
        {SliderData.map((slide, index) =>{ {/* This is how the value of the index changes, the map method simply checks for the amount of elements in the array as it is placed.*/}
          return( 
              <div className = {index === current ? 'slider__slide active': 'slider__slide'} key = {index}> {/* if index does not equal to current, nothing will be rendered because of this line*/}
                {index === current && (<img className = 'slider__slide__image' alt = 'whatever' src = {slide.image}/>)} {/* Short-circuit evaluation*/}
                <div className='slider__slide__container'>
                  {SliderData.map((slide,slideIndex) => {
                    return(
                      <div className='slider__slide__container__dots' onClick={() => GoToSlide(slideIndex)} key ={slideIndex}>&#9679;</div>
                    )
                  })}
                </div>
              </div>
          )
        })}
        <img src = {next} className='slider__right-arrow' onClick={NextSlide}/>
      </div>
      
      <nav className = 'nav' >
        <div className = 'nav__bar' tabIndex={-1}>
          <img className = 'nav__bar__image' src ={logo} />
          
          <div className = 'nav__bar__text-container' >
            <div className = 'nav__bar__text-container__text'>Collections</div>
            <div className = 'nav__bar__text-container__text'>Men</div>
            <div className = 'nav__bar__text-container__text'>Women</div>
            <div className = 'nav__bar__text-container__text'>About</div>
            <div className = 'nav__bar__text-container__text'>Contact</div>
          </div>
        </div>

        <div className = 'nav__buttons'>
          <img tabIndex={-1}  onClick={CartToggle} className = 'nav__buttons__cart' src = {iconCart}  />
          <img className = 'nav__buttons__christian' src = {christian} />
        </div>
      </nav>

      <section value = {flip.toString()}  className = 'popup-cart'>
        <div className = 'popup-cart__text'>
          <h3 className = 'popup-cart__text__title'>Cart</h3>
        </div>
        <div className='popup-cart__line'></div>
        <div cart-value = {itemFlip.toString()} className = 'popup-cart__items'>
          <img className = 'popup-cart__items__image' src = {previewThumbnail}/>
          <div className = 'popup-cart__items__description'>
            <h3 className = 'popup-cart__items__description__title'>Fall Limited Edition Sneakers</h3>
            <div className = 'popup-cart__items__description__pricing'>
              <h3 className = 'popup-cart__items__description__pricing__multiplier'>$125.00 x {count}</h3>
              <h3 className = 'popup-cart__items__description__pricing__total'>{`${(125)*(count)}.00`}</h3>
            </div>
          </div>
          <img onClick = {DeleteCart} className = 'popup-cart__items__delete' src = {deleteIcon}/>
        </div>

        <Link className = 'popup-cart__button-container' to = {(count >= 1)? '/confirmation': '#'}>
          <button onClick ={ToConfirmationPage} className = 'popup-cart__button-container__button'>Checkout</button>
        </Link>
        
      </section>

      <main className = 'content' >
        <section className = 'content__photos'>
          <div className = 'content__photos__preview'>
            <img className = 'content__photos__preview__image' src = {preview}/>
          </div>

          <div className = 'content__photos__slide-through'>
          {SliderDataThumbnail.map((slide, slideIndex) =>{
            return(
              <img className = 'content__photos__slide-through__image'  onClick={() => GoToSlide(slideIndex)} src ={slide.image} />  
            )
          })}
          </div>

        </section>

        <section className = 'content__description'>
          <div className = 'content__description__text'>
            <h3 className = 'content__description__text__company'>SNEAKER COMPANY</h3>
            <h1 className = 'content__description__text__title'>Fall Limited Edition Sneakers</h1>
            <p className = 'content__description__text__description'>
              These low-profile sneakers are your perfect casual wear companion. 
              Featuring a durable rubber outer sole, 
              they'll withstand everything the weather can offer.
            </p>

            <div className = 'content__description__text__prices'>
              <div className = 'content__description__text__prices__container'>
                <h2 className = 'content__description__text__prices__container__price'>$125.00</h2>
                <h3 className = 'content__description__text__prices__container__percentage-off'>50%</h3>
              </div>
              <h3 className = 'content__description__text__prices__price-before'>$250.00</h3>
            </div>
          </div>

          <div className = 'content__description__buttons'>
            <div className = 'content__description__buttons__container'>
          
              <img onClick ={(AddCount)}className = 'content__description__buttons__container__plus' src = {plus}/>
              <h1 className = 'content__description__buttons__container__count'>{count}</h1>
              <img onClick = {SubractCount} className = 'content__description__buttons__container__minus' src = {minus}/>
            </div>

            <button onClick = {ItemToggle} className = 'content__description__buttons__cart'><img className = 'content__description__buttons__image' src = {iconCart}/>Add to cart</button>
          </div>
        </section>
      </main>
    </div>
  );
} 

export default BuyPage;

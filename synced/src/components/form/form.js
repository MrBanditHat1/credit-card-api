import './form.scss';
import axios from 'axios';
import {useEffect, useState} from 'react';


function Form(props){

    const {values, setValues} = props
    
    const HandleSubmit = async (e) =>{
      e.preventDefault()
      try{
        const res = await axios.post('http://localhost:8000/api/', values)
        console.log(res.data)
      } catch (error){
        console.log(error.response)
      }
  
      setValues({name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
        toggle: (!values.toggle)
      
      })
      }
    
      const HandleChange = (e) =>{
        setValues({...props.values, [e.target.name]: e.target.value})
      }

    return(
        <form onSubmit ={HandleSubmit} className = 'form'>
            <div className = 'form__name'>
                <h3 className = 'form__name__title' >CARDHOLDER NAME</h3>
                <input  pattern = '^[A-Za-z_ ]*$' onChange = {HandleChange} name ='name' value = {values.name}  className = 'form__name__input'  placeholder = 'e.g. Jane Appleseed' type = 'text'/>
                <span>No symbols or numbers are allowed</span>
            </div>
            <div className = 'form__number'>
                <h3 className = 'form__number__title' >CARD NUMBER</h3>
                <input maxLength={16} pattern = '^[0-9]{16}$' onChange = {HandleChange} name = 'number' value = {values.number} className = 'form__number__input' placeholder = 'e.g. 1234 5678 9123 0000' type = 'text'/>
                <span>Not a valid card number</span>
            </div>
            <div className = 'form__expc'>
                <div className = 'form__expc__text'>
                    <h3 className = 'form__expc__text__title' >EXP. DATE (MM/YY)</h3>
                    <h3 className = 'form__expc__text__cvc' >CVC</h3>
                </div>
                <div className = 'form__expc__container'>
                    <input maxLength={2} pattern = '^[0-9]{2}$' onChange = {HandleChange} name = 'month' value = {values.month} className = 'form__expc__container__month' placeholder = 'MM' type = 'text'/>
                    <p className = 'form__expc__container__error-month'>Invalid field</p>
                    <input maxLength={2} pattern = '^[0-9]{2}$' onChange = {HandleChange} name = 'year' value = {values.year} className = 'form__expc__container__year' placeholder = 'YY' type = 'text'/>
                    <p className = 'form__expc__container__error-year'>Invalid Field</p>
                    <input maxLength={3} pattern = '^[0-9]{3}$' onChange = {HandleChange} name = 'cvc' value = {values.cvc} className = 'form__expc__container__cv' placeholder = 'e.g. 123' type = 'text'/>
                    <p className = 'form__expc__container__error-cvc'>Invalid Field</p>
                </div>
            </div>
            <button type = 'submit' className = 'form__btn'>Confirm</button>
        </form>
    )
}

export default Form
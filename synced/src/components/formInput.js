import {useState} from 'react';



function FormInput(props){
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, HandleChange, id, ...inputProps} = props;

    const HandleFocus = (e) =>{
        setFocused(true)
    }

    return(
        <div>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange ={HandleChange}
                onBlur = {HandleFocus}
                focused = {focused.toString()}            
            />
            <span>{errorMessage}</span>
        </div>
    )
}



export default FormInput;
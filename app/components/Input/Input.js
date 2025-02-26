import React from 'react'

import classes from "./Input.module.css"

const Input = (props) => {
    const { elementConfig, elementType, label, value, required, changed } = props

    let inputElement = null
    switch(elementType) {
        case 'input':
            inputElement = (
                <input
                    required={required}
                    {...elementConfig}
                    value={value} 
                    onChange={changed}
                />
            );
            break;
        case 'textarea':
            inputElement = (
                <textarea
                    required={required}
                    {...elementConfig}
                    value={value} 
                    onChange={changed}
                />
            );
            break;
        default:
            break
    }


    return (
        <p className={classes.Input}>
            <label htmlFor="name">{label}</label>
            {inputElement}
        </p>
    )
}

export default Input
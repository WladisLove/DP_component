import React from 'react';

import './styles.css'


const Button = props => {

    return (<button 
                onClick={props.onClick}
                disabled={props.disabled}>
            {props.withIcon && props.icon}
            {props.children}
        </button>)
}

export default Button;
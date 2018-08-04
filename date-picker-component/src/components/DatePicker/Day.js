import React from 'react';

import './styles.css'

const Day = props => {
    const clName = props.isCurrent ? 
        "day-element day-element-selected" 
        : props.isDisabled ? 
            "day-element day-element-disabled" 
            : "day-element";

    return (<div className={clName}>
        <div className='day'>{props.date.date()}</div>
        <div className='weekday'>{props.date.format("ddd")}</div>
    </div>)
}

export default Day;
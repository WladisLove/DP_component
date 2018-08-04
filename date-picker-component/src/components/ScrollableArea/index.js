import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Button from "../Button"

import './styles.css'

const btn_props = {
    color: "#b1b7c5",
    size: "24px",
}

const ScrollableArea = props => {

    return (<div className={props.isBig ? 'scrollable-area scrollable-area-big' : 'scrollable-area scrollable-area-usual'}>
        <Button withIcon 
                icon={<FaAngleLeft {...btn_props}/>}
                disabled={props.disabled}
                onClick={props.onPrev}/>
        <div className="content">
            {props.children}
        </div>
        <Button withIcon 
                icon={<FaAngleRight {...btn_props}/>}
                disabled={props.disabled}
                onClick={props.onNext}/>
    </div>)
}

export default ScrollableArea;
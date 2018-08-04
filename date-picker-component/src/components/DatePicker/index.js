import React from 'react';
import moment from 'moment'

import ScrollableArea from "../ScrollableArea"
import Day from "./Day"

import './styles.css'

const DatePicker = props => {
    const {numOfDays = 7, disabled, disabledDays} = props;
    const date = moment(props.value) || moment();
    
    const isDayDisabled = (day) => {
        return undefined !== disabledDays.find(el => {
            return el.getFullYear() === day.year() 
                && el.getMonth() === day.month() 
                && el.getDate() === day.date();
        })
    }

    const add = (key, val=1) => {
        let day = date.add(val, key);
        isDayDisabled(day) ? add("day", val) : props.onChange(day.toDate());
    }
    const subtract = (key, val=1) => {
        let day = date.subtract(val, key);
        isDayDisabled(day) ? subtract("day", val) : props.onChange(day.toDate());
    }

    const renderDays = () => {
        let daysArr = [],
            dateThrough = Math.ceil(numOfDays / 2) - 1,
            tmp;

        for(let i=0; i< numOfDays; i++){
            tmp = moment(props.value).subtract(dateThrough, "day");
            daysArr.push(<Day date={tmp}
                                isCurrent={dateThrough === 0}
                                isDisabled={isDayDisabled(tmp)}
                                key={"day_"+i}/>);
            dateThrough--;
        }
        return daysArr;
    }

    return (<div className="date-picker-content">
        <ScrollableArea onNext={() => add("year")}
                        onPrev={() => subtract("year")}
                        disabled={disabled}>
            {date.year()}
        </ScrollableArea>
        <ScrollableArea onNext={() => add("month")}
                        onPrev={() => subtract("month")}
                        disabled={disabled}>
            {date.format("MMMM")}
        </ScrollableArea>
        <br/>
        <br/>
        <br/>
        <ScrollableArea isBig
                        onNext={() => add("day")}
                        onPrev={() => subtract("day")}
                        disabled={disabled}>
            {renderDays()}
        </ScrollableArea>
    </div>)
}

export default DatePicker;
import React from 'react';
import {DigitalClockViewPropsType} from './Clock';
import  "./AnalogClockView.css"

export const AnalogClockView = (props: DigitalClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${props.data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.data.getHours() * 30}deg)`
    };
    return (
        <div className={"clocks"}>
        <h3>Clock</h3>
        <div className={"analog-clock"}>
            {/*<div className="dial hours" style={{transform: `translate(-50%) rotate(${props.data.getHours()/12*360 }deg)`}}></div>*/}
            {/*<div className="dial minutes"style={{transform: `translate(-50%) rotate(${props.data.getMinutes()/60*360}deg)`}}  ></div>*/}
            {/*<div className="dial seconds"style={{transform: `translate(-50%) rotate(${props.data.getSeconds()/60*360}deg)`}}  ></div>*/}

            <div className={"dial seconds"}  style={secondsStyle} />
            <div className={"dial minutes"}  style={minutesStyle}/>
            <div className={"dial hours"} style={hoursStyle} />

        </div>
    </div>);
};
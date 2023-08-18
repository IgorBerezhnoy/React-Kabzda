import React from 'react';
import {DigitalClockViewPropsType} from './Clock';

export const DigitalClockView = (props: DigitalClockViewPropsType) => {
    const getDoubleStrings = (number: number) => number < 10 ?
        '0' + number
        : number;

    return (<><span>{getDoubleStrings(props.data.getHours())}</span>:
        <span>{getDoubleStrings(props.data.getMinutes())}</span>:
        <span>{getDoubleStrings(props.data.getSeconds())}</span></>);
};
import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type PropsType = { mode: 'analog' | 'digital' }
export const Clock = (props: PropsType) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            console.log('Tick');
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(IntervalId);
        };

    }, []);


    let view;
    {
        props.mode === 'digital' ?
            view = <DigitalClockView data={date}/>
            : view = <AnalogClockView data={date}/>;
    }
    return (
        <div>
            {view}
        </div>
    );
};

export type DigitalClockViewPropsType={
    data:Date
}


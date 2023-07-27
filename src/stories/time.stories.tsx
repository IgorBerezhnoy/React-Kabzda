import React, {useEffect, useState} from 'react';

export default {
    title: 'Time',

};

export const Time = () => {
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [hours, setHours] = useState(0);

    if (seconds > 59) {

        setSeconds((state) => 0)
        setMinutes((state) => state + 1);
    }
    if (minutes > 59) {
        setMinutes(0);
        setHours((state) => state + 1);
    }        if (hours >23 ) {
        setHours(0);
    }

    useEffect(() => {
        setInterval(() => {

            setSeconds((state) => state + 1);

        }, 1000);
    }, []);



    let Time=new Date()

    useEffect(() => {
        setInterval(() => {

           Time=new Date()

        }, 1);
    }, []);


    return <>

        <hr/>
        Time <time> {hours} : {minutes} : {seconds}</time>
        <hr/>
        Time <time> {Time.getHours()} : {Time.getMinutes()} : {Time.getSeconds()}</time>
    </>;
};

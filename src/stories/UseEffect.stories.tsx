import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect',

};


export const SimpleExample = () => {
    console.log('SimpleExample');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log('one time');

    }, []);
    useEffect(() => {
        console.log('everyTime');
    });
    useEffect(() => {
        console.log('useEffect wit only counter');
        document.title = counter.toString();
    }, [counter]);

    const onClickHandler = () => {
        setCounter(counter + 1);
    };
    const onClickHandler1 = () => {
        setFake(fake + 1);
    };
    return <>
        counter:{counter}
        <button onClick={onClickHandler}>+</button>
        Fake:{fake}
        <button onClick={onClickHandler1}>+</button>
    </>;
};


export const SetTimeOutExample = () => {
    console.log('SimpleExample');
    const [counter, setCounter] = useState(1);
    // const [fake, setFake] = useState(1);


    useEffect(() => {
        console.log('useEffect wit only counter');
        setInterval(() => {
            console.log('setTimeout');
            setCounter((state)=>state+1);
        }, 1000);
    }, []);

    // const onClickHandler = () => {
    //     setCounter(counter + 1);
    // };
    // const onClickHandler1 = () => {
    //     setFake(fake + 1);
    // };
    return <>
        counter:{counter}
        {/*<button onClick={onClickHandler}>+</button>*/}
        {/*Fake:{fake}*/}
        {/*<button onClick={onClickHandler1}>+</button>*/}
    </>;
};


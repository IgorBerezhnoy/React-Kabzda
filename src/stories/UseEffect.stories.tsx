import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect',

};


export const SimpleExample = () => {
    console.log('SimpleExample');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    useEffect(() => {
        console.log('everyTime');
        document.title = counter.toString();
    } );
    useEffect(() => {
        console.log('oneTime');
        document.title = counter.toString();
    }, []);
    useEffect(() => {
        console.log('onlyCounter');
        document.title = counter.toString();
    }, [counter]);

    const onClickHandler = () => {
        setCounter(counter + 1);
    };
    return <>
        counter:{counter}
        <button onClick={onClickHandler}>+</button>
        fake:{fake}
        <button onClick={() => setFake(fake + 1)}>+</button>

    </>;
};

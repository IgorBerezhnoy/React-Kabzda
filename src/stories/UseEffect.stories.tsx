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
        const intervalId = setInterval(() => {
            // console.log('setTimeout');
            setCounter((state) => state + 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('component rendered');
    // const [fake, setFake] = useState(1);


    useEffect(() => {
        console.log('Effect occurred ');
        return () => {
            console.log('Reset effect ');
        };
    }, []);


    return <>
        counter:{counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>;
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');
    console.log('component rendered' + text);
    // const [fake, setFake] = useState(1);


    useEffect(() => {
        const handler = () => {
            console.log('Effect occurred ');
            window.document.addEventListener('keypress', (e) => {
                setText(text + e.key);
            });
        };
        handler();
        return () => {
            window.removeEventListener('keypress', handler);
            console.log('Effect off');
        };
    }, [text]);

    return <>
        Typed text:{text}
    </>;
};

export const SetTimeOutExample1 = () => {
    const [text, setText] = useState('');


    useEffect(() => {
        const setTimeId = setTimeout(() => alert('hello'), 1000);

        return ()=> clearTimeout(setTimeId);
    }, []);

    return <>
        Typed text:{text}
    </>;
};


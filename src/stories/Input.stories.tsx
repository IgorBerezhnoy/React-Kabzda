import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
};

class input {
}

export const UncontrolledInput = () => {
    return <input/>;
};

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return <div><input value={value} onChange={onChangeHandler}/> - {value} </div>;
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClockButtonHandler = () => {
        let el = inputRef.current as HTMLInputElement;
        setValue(el.value);

    };
    return <div><input ref={inputRef} />
        <button onClick={onClockButtonHandler}>save
        </button>
        -actual value: {value} </div>;
};

export const ControlledInputWithFixValue = () => {
    return <input value={'it-incubator'}/>;
};
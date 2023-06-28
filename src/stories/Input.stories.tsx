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
    return <div><input ref={inputRef}/>
        <button onClick={onClockButtonHandler}>save
        </button>
        -actual value: {value} </div>;
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return (<input value={parentValue} onChange={onChangeHandler} />)
};


export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };
    return (<input type={"checkbox"} checked={parentValue} onChange={onChangeHandler} />)
};
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>("3");
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    )};

export const ControlledInputWithFixValue = () => {
    return <input value={'it-incubator'}/>;
};
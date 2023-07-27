import React, {useState} from 'react';

export default {
    title: 'useState',

};


export const Example1 = () => {

    const generateData = () => {
        console.log("generate");
      return 32849872735
    }

    const [counter, setCounter] = useState(generateData);
    const onClickHandler = () => {

        setCounter(changer);
    };
    const changer=(state:number)=>{
        console.log(state);
        return state+1
    }

    return <>
        {counter}
        <button onClick={onClickHandler}>+</button>

    </>;
};

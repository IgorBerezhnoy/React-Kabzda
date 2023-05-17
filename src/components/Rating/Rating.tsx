import React from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean
}

export function Rating(props: RatingPropsType) {
    console.log('Rating is rending');
    return (
        <div>
            <Star selected={props.value >= 1}/>
            <Star selected={props.value >= 2}/>
            <Star selected={props.value >= 3}/>
            <Star selected={props.value >= 4}/>
            <Star selected={props.value >= 5}/>
        </div>
    );

}

function Star(props: StarPropsType) {
    console.log('star rending');
    if (props.selected) {
        return (<span><b>Star</b> </span>);
    } else {
        return (<span>Star</span>);
    }

    ;
}

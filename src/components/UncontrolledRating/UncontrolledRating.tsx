import React, {useState} from 'react';

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType={
    selected:boolean
}

export function UncontrolledRating () {
    let [value,SetValue]=useState<RatingPropsType>(0)

    const onClickButtonHandler = (value:RatingPropsType) => {
        SetValue(value)
    }

    console.log('Rating is rending');
    return (
        <div>
            <Star selected={value>=1}/><button onClick={()=>onClickButtonHandler(1)}>1</button>
            <Star selected={value>=2}/><button onClick={()=>onClickButtonHandler(2)}>2</button>
            <Star selected={value>=3}/><button onClick={()=>onClickButtonHandler(3)}>3</button>
            <Star selected={value>=4}/><button onClick={()=>onClickButtonHandler(4)}>4</button>
            <Star selected={value>=5}/><button onClick={()=>onClickButtonHandler(5)}>5</button>
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

import React, {useState} from 'react';

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    SetValue: () => void
    value?:RatingPropsType
}

export function UncontrolledRating() {
    let [value, SetValue] = useState<RatingPropsType>(0);

    const onClickButtonHandler = (value: RatingPropsType) => {
        SetValue(value);
    };

    console.log('Rating is rending');
    return (
        <div>
            {/*<Star selected={value>=1} callBack={onClickButtonHandler}/>*/}
            {/*<button onClick={()=>onClickButtonHandler(1)}>1</button>*/}

            <Star selected={value >= 1} SetValue={()=>SetValue (1)} />
            <Star selected={value >= 2} SetValue={()=>SetValue (2)} />
            <Star selected={value >= 3} SetValue={()=>SetValue(3)} />
            <Star selected={value >= 4} SetValue={()=>SetValue(4)} />
            <Star selected={value >= 5} SetValue={()=>SetValue(5)} />

            {/*    <Star selected={value>=1} callBack={()=>onClickButtonHandler(1)}/>
            <Star selected={value>=2} callBack={()=>onClickButtonHandler(2)}/>
            <Star selected={value>=3} callBack={()=>onClickButtonHandler(3)}/>
            <Star selected={value>=4} callBack={()=>onClickButtonHandler(4)}/>
            <Star selected={value>=5} callBack={()=>onClickButtonHandler(5)}/>*/}


            {/*<Star selected={value>=6} callBack={()=>onClickButtonHandler(6)}/>*/}
            {/*<Star selected={value>=3}/><button onClick={()=>onClickButtonHandler(3)}>3</button>*/}
            {/*<Star selected={value>=4}/><button onClick={()=>onClickButtonHandler(4)}>4</button>*/}
            {/*<Star selected={value>=5}/><button onClick={()=>onClickButtonHandler(5)}>5</button>*/}
        </div>
    );
}

function Star(props: StarPropsType) {
    console.log('star rending');
//   return  props.selected ? <span onClick={props.callBack}><b>Star</b></span>:<span onClick={props.callBack}>Star</span>

    return <span onClick={props.SetValue}>{props.selected ? <b> star </b> : 'star '}</span>;

}

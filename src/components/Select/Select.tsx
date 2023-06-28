import React, {useState} from 'react';
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select: React.FC<SelectPropsType> = (props) => {
    let [onOffSelect, setOnOffSelect] = useState<boolean>(false);

    const onClickHandler = () => {
        setOnOffSelect(!onOffSelect);
    };
const onClickDivHandler=(value:any)=>{
    props.onChange(value)
    setOnOffSelect(!onOffSelect)
}
    const itemsMap = props.items.map((el, i) => <div key={i} onClick={()=>onClickDivHandler(el.title)}>{el.title}</div>);

    return (
        <div>
            <h2 onClick={onClickHandler} autoFocus>{props.value}</h2>
            <div className={onOffSelect?s.select:""}>{onOffSelect && itemsMap}</div>
        </div>
    );
};


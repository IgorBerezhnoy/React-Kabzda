import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type AccordionPropsType = {
    titleValue: string

}

export function SelfControlledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    const OnClickHandler = () => {
        // setCollapsed(!collapsed);
        dispatch({type: TOGGLE_COLLAPSED});

    };

    console.log('Accordion is rending');
    return <div>
        <AccordionTitle title={props.titleValue} callBack={OnClickHandler}/>
        {!state.collapsed && <AccordionBody/>}
    </div>;

}


type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<h3 onClick={props.callBack}>{props.title}</h3>);
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>);
}
///
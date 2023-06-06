import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string

}

export function SelfControlledAccordion(props: AccordionPropsType) {
    let [collapsed,setCollapsed]=useState(true)

    const OnClickHandler = () => {
           setCollapsed(!collapsed)

    }

    console.log('Accordion is rending');
    return <div>
        <AccordionTitle title={props.titleValue} callBack={OnClickHandler}/>
        {!collapsed&&<AccordionBody/>}
    </div>;

}


type AccordionTitlePropsType = {
    title: string
    callBack:()=>void
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
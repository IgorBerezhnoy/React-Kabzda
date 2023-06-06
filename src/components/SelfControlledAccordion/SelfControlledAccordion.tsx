import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

export function SelfControlledAccordion(props: AccordionPropsType) {
    let [collapsed,setCollapsed]=useState(true)

    const OnClickHandler = () => {
        if (collapsed){
           setCollapsed(false)
        }else{
            setCollapsed(true)
        }
    }

    console.log('Accordion is rending');
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={OnClickHandler}>TOGGLE</button>
        {!collapsed&&<AccordionBody/>}
    </div>;

}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<h3>{props.title}</h3>);
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>);
}
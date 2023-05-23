import React from 'react';

type AccordionPropsType={
    title:string
}

type AccordionTitlePropsType={
    AcardionTitle:string
}

export function Accordion(props:AccordionPropsType) {
    console.log('accordion rendering');

    return (<div>
        <AccordionTitle AcardionTitle={props.title}/>
        <AccordionBody/>
    </div>);
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log('accordionTitle rendering');
    return (<h3>{props.AcardionTitle}</h3>);
}

function AccordionBody() {
    console.log('accordionBody rendering');

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}
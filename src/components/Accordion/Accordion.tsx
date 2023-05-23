import React from 'react';

type AccordionPropsType = {
    ValueTitle: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('accordion rendering');
    if (props.collapsed) {
        return (<div>
            <AccordionTitle title={props.ValueTitle}/>

            <AccordionBody/>
        </div>);
    } else {
        return (<div>
            <AccordionTitle title={props.ValueTitle}/></div>);
    }
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('accordionTitle rendering');
    return (<h3>{props.title}</h3>);
}

function AccordionBody() {
    console.log('accordionBody rendering');

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}
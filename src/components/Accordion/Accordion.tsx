import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rending');
    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={() => props.setCollapsed(!props.collapsed)}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>;

}


type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<h3 onClick={props.setCollapsed}>{props.title}</h3>);
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul> {props.items.map((el, index) => {
            const onClickHandler = () => {
                props.onClick(el.value);
            };
            return (
                <li key={index} onClick={onClickHandler}>{el.title}</li>
            );
        })}
        </ul>);
}
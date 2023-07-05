import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: string
    onChange: (value: any) => void
    items: ItemType[]
}
export const SelectWithDimych: React.FC<SelectPropsType> = (props) => {
    const [active, setActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(props.value);

    const hoveredItem = props.items.find(i => i.title === hoveredElement);

    useEffect(() => {
        setHoveredElement(props.value);
    }, [props.value]);

    const onClickHandler = () => {
        setActive(!active);
    };
    const onClickItems = (title: string) => {
        props.onChange(title);
        setActive(false);
    };

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.title);
                        return;
                    }
                }
            }
            if (!props.value) {
                props.onChange(props.items[0].title);
                return;
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    };


    return (
        <div>
            {/*<select>*/}
            {/*    <option value="Dimych">Dimych</option>*/}
            {/*    <option value="Viktor">Viktor</option>*/}
            {/*    <option value="Anna">Anna</option>*/}
            {/*</select>*/}
            <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={s.main} onClick={onClickHandler}>{props.value}</span>
                {active && <div className={s.items}>
                    {props.items.map(i => {
                        return (
                            <div key={i.value} onMouseEnter={() => setHoveredElement(i.title)}
                                 onClick={() => onClickItems(i.title)}
                                 className={hoveredItem === i ? s.ItemActive : ''}>{i.title}
                            </div>);
                    })}
                </div>}
            </div>
        </div>
    );
};


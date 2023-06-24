import React, {useState} from 'react';
import {action} from  "@storybook/addon-actions"
import {Accordion} from './Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion
};

const callback=action("accordion mode change event fired")
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} setCollapsed={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} setCollapsed={callback}/>


export const ModeChanging = () => {
    const [value, setValur] = useState<boolean>(true);
    return <Accordion titleValue={"Users"} collapsed={value} setCollapsed={()=>setValur(!value)}/>;
};


// export const Button = ({
//                            primary = false,
//                            size = 'medium',
//                            backgroundColor,
//                            label,
//                            ...props
//                        }: ButtonProps) => {
//     const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//     return (
//         <button
//             type="button"
//             className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//             style={{ backgroundColor }}
//             {...props}
//         >
//             {label}
//         </button>
//     );
// };

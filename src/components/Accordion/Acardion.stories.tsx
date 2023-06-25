import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion stories',
    component: Accordion
};

const callback = action('accordion mode change event fired');

const callbackProps = {setCollapsed: callback};
const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>;


export const MenuCollapsedMode = Template.bind(({}));
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    ...callbackProps
};
export const UsersUncollapsedMode = Template.bind(({}));
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    ...callbackProps
};


export const ModeChanging = () => {
    const [value, setValur] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} setCollapsed={() => setValur(!value)}/>;
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

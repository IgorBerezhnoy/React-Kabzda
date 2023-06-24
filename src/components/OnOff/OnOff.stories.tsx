import React, {useState} from 'react';
import {action} from  "@storybook/addon-actions"
import {OnOff} from './OnOff';


export default {
    title: 'OnOff stories',
    component: OnOff
};

export const OnMode = () => <OnOff on={true} setOn={action("on or off clicked")}/>;
export const OffMode = () => <OnOff on={false} setOn={action("on or off clicked")}/>;

export const ModeChanging = () => {
    const [value, setValur] = useState<boolean>(true);
    return <OnOff on={value} setOn={setValur}/>;
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

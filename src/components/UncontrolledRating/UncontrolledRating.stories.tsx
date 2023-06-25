import React, {useState} from 'react';
import {UncontrolledRating} from './UncontrolledRating';
import {Rating, RatingValueType} from '../Rating/Rating';
import {action} from '@storybook/addon-actions';



export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
};

const callback=action("Rating changed")

export const ChangeRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const ChangeRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />
export const ChangeRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const ChangeRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const ChangeRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>


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

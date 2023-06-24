import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyStars = () => <Rating value={0} onClick={() => {
}}/>;
export const Rating1 = () => <Rating value={1} onClick={() => {
}}/>;
export const Rating2 = () => <Rating value={2} onClick={() => {
}}/>;
export const Rating3 = () => <Rating value={3} onClick={() => {
}}/>;
export const Rating4 = () => <Rating value={4} onClick={() => {
}}/>;
export const ChangeRating5 = () => {
const [rating, setRating]=useState<RatingValueType> (5)
    return <Rating value={rating} onClick={ setRating}/>;
}


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

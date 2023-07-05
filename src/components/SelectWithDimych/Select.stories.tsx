import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {SelectWithDimych} from './SelectWithDimych';

export default {
    title: 'DimychSelect',
    component: SelectWithDimych
};

export const WithValue = () => {
    const items = [{title: 'Igor', value: 1}, {title: 'Dimych', value: 2},
        {title: 'Viktor', value: 3}, {title: 'Anna', value: 4},
        {title: 'Bob', value: 5}, {title: 'Donald', value: 6},
        {title: 'Jon', value: 7}];
    const [value, setValue] = useState(items[0].title);
    return <SelectWithDimych value={value} onChange={setValue} items={items}/>;
};
export const WithOutValue = () => {
    const items = [{title: 'Igor', value: 1}, {title: 'Dimych', value: 2},
        {title: 'Viktor', value: 3}, {title: 'Anna', value: 4},
        {title: 'Bob', value: 5}, {title: 'Donald', value: 6},
        {title: 'Jon', value: 7}];
    const [value, setValue] = useState(undefined);
    return <SelectWithDimych value={value} onChange={setValue} items={items}/>;
};

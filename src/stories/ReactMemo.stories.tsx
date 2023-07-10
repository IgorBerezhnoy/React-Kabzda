import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
};

const NewMessagesCounter = (props: { count: number }) => {
    console.log('counter');
    return <div>{props.count}</div>;
};
const UsersSecret = (props: { users: string[] }) => {
    console.log('users');
    return <div>{props.users.map((el, index) => <div key={index}>{el}</div>)}</div>;
};
const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
    const onClickHandler = () => {
        setCounter(counter + 1);
    };
    const addUser = () => {
        setUsers(['RandomName', ...users]);
    };
    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>addUser+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>;
};

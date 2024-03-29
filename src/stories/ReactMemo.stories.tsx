import React, {useState} from 'react';

export default {
    title: 'ReactMemo',

};


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>;
};
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>;
};

const Users=React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem',"Katya"]);
const onClickHandler=()=>{
    setCounter(counter+1)
}
const addUser=()=>{
    setUsers(["Sveta"+new Date().getTime(),...users])
}
    return <>
    <button onClick={onClickHandler}>+</button>
    <button onClick={addUser}>AddUser</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>;
};

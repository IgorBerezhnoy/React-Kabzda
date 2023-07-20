import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',

};


export const DifficultCountingExample = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);

    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let temmpA=resultA
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            temmpA *= i;
        }
            return temmpA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    return <>
        <input type={'number'} value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input type={'number'} value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div> Result for A:{resultA}</div>
        <div> Result for B:{resultB}</div>
    </>;
};

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>;
};

const Users=React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem',"Katya"]);
    const onClickHandler=()=>{
        setCounter(counter+1)
    }
    const addUser=()=>{
        setUsers(["Sveta"+new Date().getTime(),...users])
    }
    let newArray = useMemo(()=>users.filter(u=>u.toLowerCase().indexOf("a")>-1),[users])
    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>AddUser</button>
        {counter}
        <Users users={newArray}/>
    </>;
};
import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
};

export const DifficultCountingExample1 = () => {

    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>;
};

const UsersSecret = (props: { users: string[] }) => {
    console.log('users');
    return <div>{props.users.map((el, index) => <div key={index}>{el}</div>)}</div>;
};
const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
    const onClickHandler = () => {
        setCounter(counter + 1);
    };

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1);
    }, [users]);
    const addUser = () => {
        setUsers(['RandomName', ...users]);
    };
    return <>
        {counter}
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>addUser+</button>
        <Users users={newArray}/>
    </>;
};


export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);
    const onClickHandler = () => {
        setCounter(counter + 1);
    };
    console.log(books);


    const memoizedAddBook = useMemo(() => () => {
        setBooks(['Angular', ...books]);
    }, [books]);
    const memoizedAddBook2 = useCallback( () => {
        setBooks(['Angular', ...books]);
    }, [books]);

    return <>
        {counter}
        <button onClick={onClickHandler}>+</button>

        <Books addBook={memoizedAddBook2}/>
    </>;
};
const BooksSecret = (props: { addBook: () => void }) => {

    console.log('users');
    return <div>
        <button onClick={props.addBook}>addBook+</button>
    </div>;
};
const Books = React.memo(BooksSecret);




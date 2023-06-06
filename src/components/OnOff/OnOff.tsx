import './OnOff.css';
import {useState} from 'react';



export function OnOff() {

    const[on, setOn]=useState(false)


    const clickOn = () => {
        setOn(true)
    }
    const clickOff = () => {
        setOn(false)
    }


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black ',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black ',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'

    };
    return <div>
        <div style={onStyle} onClick={clickOn}>On</div>
        <div style={offStyle} onClick={clickOff}>Off</div>
        <div style={indicatorStyle}></div>
    </div>;
}

/*
export function OnOff(props: OnOffPropsType) {
    if (props.on) {
        return (
            <div>
                <button style={{background: 'limegreen'}}> on</button>
                <button>off</button>
                <button style={{borderRadius: 30, width: 15, height: 15, background: 'limegreen'}}></button>
            </div>);
    } else {
        return (
            <div>
                <button> on</button>
                <button style={{background: 'red'}}>off</button>
                <button style={{borderRadius: 30, width: 15, height: 15, background: 'red'}}></button>
            </div>
        );
    }
}
*/

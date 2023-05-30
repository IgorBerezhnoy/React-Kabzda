import './OnOff.css';

type OnOffPropsType = {
    on: boolean
}
//
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

import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {

    return (
        <div className="App">
            <PageTitle title={"This is component"}/>
            <PageTitle title={"My friends"}/>
            article 1
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            article 2
            <Rating value={4}/>
        </div>
    );
}
type PageTitleType={
    title:string
}
function PageTitle(props:PageTitleType) {
    console.log('Title rendering');
    return <h1>{props.title}</h1>;
}



export default App;

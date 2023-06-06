import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {SelfControlledAccordion} from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div className="App">
           {/* <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={2}/>*/}
            <OnOff/>
            <SelfControlledAccordion titleValue={"Menu"}/>
            <SelfControlledAccordion titleValue={"Users"}/>
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType =
    {
        title: string;
    }

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>);
}

//sa

export default App;

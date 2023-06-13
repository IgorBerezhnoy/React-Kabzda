import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingPropsType, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {SelfControlledAccordion} from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {


    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true);
    const[on, setOn]=useState(false)
    return (
        <div className="App">

            {/* <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={3}/>*/}
             {/*  <Accordion titleValue={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}

            <OnOff on={on} setOn={setOn}/>
            {/*<SelfControlledAccordion titleValue={"Menu"}/>*/}
            {/*<SelfControlledAccordion titleValue={"Users"}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}

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

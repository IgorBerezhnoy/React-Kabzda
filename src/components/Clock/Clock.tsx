import React, {useEffect, useState} from 'react';

type PropsType = {}
export const Clock = (props:PropsType) => {

    const [date,setDate]=useState(new Date())

    useEffect(()=>{
       const IntervalId=setInterval(()=>{
           console.log("Tick");
            setDate(new Date());
        },1000)
        return ()=>{
            clearInterval(IntervalId)
        }
    },[])

 const getDoubleStrings=(number:number)=>number<10?
     "0"+number
     :number





    return (
        <div>
            <span>{getDoubleStrings(date.getHours())}</span> :
            <span>{getDoubleStrings(date.getMinutes())}</span> :
            <span>{getDoubleStrings(date.getSeconds())}</span>
        </div>
    );
};


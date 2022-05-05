import React from 'react';
import LumperCard from './LumperCard';

function Lumpers(props) {

    const lumpers = props.lumpers;

  return (
    <div>
        {lumpers.map((item,index)=>{
         return <LumperCard key={index} lumper={item} />
     })}
    </div>
  )
}

export default Lumpers
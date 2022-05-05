import React from 'react'
import ContainerCard from './ContainerCard';

function Container(props) {

    const containers = props.containers



  return (
    <div>
        {containers.map((item,index)=>{
         return <ContainerCard key={index} container={item} />
     })}
        
    </div>
  )
}

export default Container
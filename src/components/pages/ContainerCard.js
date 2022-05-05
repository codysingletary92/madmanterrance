import React from 'react'

function ContainerCard(props) {

    const container = props.container

  return (
    <div style={{backgroundColor: 'black'}}>
       <h1>{container['number']}</h1>
       <h2>{container['lumper']}</h2>
       <h2>{container['splits']}</h2> 
       <h2>{container['weight']}</h2>
    </div>
  )
}

export default ContainerCard

// {number: 'AAAA1234567', splits: 13, weight: '10lbs', ID: 0}
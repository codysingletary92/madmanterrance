import React from 'react'

function LumperCard(props) {
    const lumper = props.lumper
  return (
    <div style={{backgroundColor: 'black'}}>
        <h1>{lumper.name}</h1>
        <h1>{lumper.phone}</h1>
    </div>
  )
}

export default LumperCard

//{name: 'John Smith', phone: '123-345-7890'}
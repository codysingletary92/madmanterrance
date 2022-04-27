import React, { useState } from 'react';

function AdminPortal(){

    const [ activeView, setActiveView ] = useState()

    return(
        <div>
            <h1>admin portal</h1>
            <h2>{activeView}</h2>
            <button >Recent Containers</button>
            <button >Input Container</button>
            <button >Lumper Profile</button>
        </div>
    )
        
};

export default AdminPortal;
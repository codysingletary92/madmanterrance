import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Containers from '../pages/Containers';
import InputContainer from '../pages/InputContainers';
import Lumpers from '../pages/Lumpers';

function AdminPortal(props){

    const [ activeView, setActiveView ] = useState(false)

    const containers = props.containers;
    const lumpers = props.lumpers;
    let navigate = useNavigate();

    function viewClick(event){
        setActiveView(event.target.name)
    }

    
    


    return(
        <div>
            <h1>admin portal</h1>
            <h2>{activeView}</h2>
            <button name='containers' onClick={viewClick}>Containers</button>
            <button name='input' onClick={viewClick}>Input Container</button>
            <button name='lumpers' onClick={viewClick}>Lumpers</button>
            {activeView ? navigate('lumper') : null}
            <Containers containers={containers} />
            <InputContainer />
            <Lumpers lumpers={lumpers}/>
        </div>
    )
        
};

export default AdminPortal;


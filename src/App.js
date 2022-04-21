import { useState } from 'react';
import EmployeePortal from './components/employee/employeeportal';
import AdminPortal from './components/admin/adminportal';
import Login from './components/Login';
import Header from './components/Header';

function App() {

  const [ state, setState ] = useState({
    isLoggedIn: false,
    isAdmin: false,
    Employee: ['john','matt','luke'],
    containers: [
      {number: 'AAAA1234567', splits: 13, weight: '10lbs', },
      {number: 'WEFR3456875', splits: 4, weight: '6lbs', },
      {number: 'UYRF3456724', splits: 1, weight: '34lbs', },
      {number: 'QWER1234567', splits: 60, weight: '13lbs', },
      {number: 'OPIU2346785', splits: 8, weight: '78lbs', },
      {number: 'OIUY9073458', splits: 17, weight: '56lbs', },
      {number: 'PNGA4567823', splits: 137, weight: '4lbs', },
      {number: 'HNDC3234675', splits: 13, weight: '39lbs', },
    ]
  });
  
  const [loginState, setLoginState] = useState({isLoggedIn: false, isAdmin: false,})

  function loginSwitch(login, rank){
    console.log({isLoggedIn: login, isAdmin: rank,})
    setLoginState({isLoggedIn: login, isAdmin: rank,})

  }

  function loginAuth () {
    if (loginState.isAdmin){
      return <AdminPortal />
    }
    else if (loginState.isLoggedIn && !loginState.isAdmin){
      return <EmployeePortal />
    }
    else {
      return null
    }
  }
 

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
      <Header />
      {!loginState.isLoggedIn ? <Login loginSwitch={loginSwitch} /> : <></> }
      {loginAuth()}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import EmployeePortal from './components/employee/employeeportal';
import AdminPortal from './components/admin/adminportal';
import Login from './components/Login';
import Header from './components/Header';



function App() {
  const [ employeeState, setEmployeeState ] = useState([
    {name: 'John Smith', phone: '123-345-7890'},
    {name: 'John Smith', phone: '123-345-7890'},
    {name: 'John Smith', phone: '123-345-7890'},
    {name: 'John Smith', phone: '123-345-7890'},
    {name: 'John Smith', phone: '123-345-7890'} 
  ])

  const [ containerState, setContainerState ] = useState([
  {number: 'AAAA1234567', splits: 13, weight: '10lbs', ID: 0, lumper:'John Smith'},
  {number: 'WEFR3456875', splits: 4, weight: '6lbs',  ID: 1, lumper:'John Smith'},
  {number: 'UYRF3456724', splits: 1, weight: '34lbs',  ID: 2, lumper:'John Smith'},
  {number: 'QWER1234567', splits: 60, weight: '13lbs',  ID: 3, lumper:'John Smith'},
  {number: 'OPIU2346785', splits: 8, weight: '78lbs',  ID: 4, lumper:'John Smith'},
  {number: 'OIUY9073458', splits: 17, weight: '56lbs',  ID: 5, lumper:'John Smith'},
  {number: 'PNGA4567823', splits: 137, weight: '4lbs',  ID: 6, lumper:'John Smith'},
  {number: 'HNDC3234675', splits: 13, weight: '39lbs',  ID: 7, lumper:'John Smith'}
])
  
  const [ loginState, setLoginState ] = useState({isLoggedIn: false, rank: ''})

  function loginSwitch(rank){
    setLoginState({isLoggedIn: true, rank: rank});
  }

  // function loginAuth () {
  //   if (loginState.isAdmin){
  //     return <AdminPortal />
  //   }
  //   else if (loginState.isLoggedIn && !loginState.isAdmin){
  //     return <EmployeePortal />
  //   }
  //   else {
  //     return null
  //   }
  // }

  // console.log('test: '+loginState.isLoggedIn+', '+loginState.rank)

  return (
    <Router>
      <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
        <Header />
      </div>

      <Routes>
        <Route path='/admin' element={<AdminPortal containers={containerState} lumpers={employeeState}/>}/>
        <Route path='/lumper' element={<EmployeePortal />}/>
        <Route path='/' element={!loginState.isLoggedIn ? <Login loginSwitch={loginSwitch} /> : <Navigate to= {loginState.rank} />}/>
      </Routes>

    </Router>
    
  );
}

export default App;

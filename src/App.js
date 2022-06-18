import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './components/Screens/home/home.jsx';
import Watch from './components/Screens/watch/watch.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom';

function App() {
  const [sidebar,handleSidebar]=useState(0);
  
  function switchSidebar(){
      handleSidebar(value=>1-value);
  }

  const GenericParentLayout=({Component,handleHeaderBar,switchsidebar})=>{
    useEffect(()=>{
      if(handleHeaderBar===false){
        switchsidebar();
      }
    },[handleHeaderBar])
    return <>
      <Header switchSidebar={switchSidebar} handleHeaderBar={handleHeaderBar}></Header>
        <div className='app-container'>
            <Sidebar className="sidebar" sidebar={sidebar}></Sidebar>
            <Container fluid className='app-main'>
                {Component}
            </Container>
      </div>
    </>
  }
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<GenericParentLayout Component={<Home/>}  handleHeaderBar={true}/>} exact></Route>
            <Route path="/search" element={<GenericParentLayout Component={<h1>Search Result</h1>}/>}></Route>
            <Route path="/watch/:id" element={<GenericParentLayout Component={<Watch switchSidebar={switchSidebar} sidebar={sidebar}/>} handleHeaderBar={false} switchsidebar={switchSidebar}/>}></Route>
            <Route path="*" element={<Navigate replace to="/"/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

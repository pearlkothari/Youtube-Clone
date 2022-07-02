import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './components/Screens/home/home.jsx';
import Watch from './components/Screens/watch/watch.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom';
import Trending from './components/Screens/trending/trending.jsx';
import LikeVideos from './components/Screens/Like Videos/likeVideos.jsx';
import SearchScreen from './components/Screens/search/SearchScreen.jsx';
import Subscriptions from './components/Screens/subscriptions/Subscriptions.jsx';

function App() {
  const [sidebar,handleSidebar]=useState(0);
  
  function switchSidebar(){
      handleSidebar(value=>1-value);
  }

  function setSidebar(){
    handleSidebar(0);
  }

const GenericParentLayout=({Component,handleHeaderBar,switchsidebar})=>{
    useEffect(()=>{
      if(handleHeaderBar===false){
        switchsidebar();
      }else{
        setSidebar();
      }
    },[handleHeaderBar,switchsidebar])
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
            <Route path="/Home" element={<GenericParentLayout Component={<Home/>}  handleHeaderBar={true}/>}></Route>
            <Route path="/search/:query" element={<GenericParentLayout Component={<SearchScreen/>} handleHeaderBar={true}/>}></Route>
            <Route path="/watch/:id/:channel" element={<GenericParentLayout Component={<Watch switchSidebar={switchSidebar} sidebar={sidebar}/>} handleHeaderBar={false} switchsidebar={switchSidebar}/>}></Route>
            <Route path="/trending"  element={<GenericParentLayout handleHeaderBar={true} Component={<Trending/>}/>}></Route>
            <Route path="/likevideos"  element={<GenericParentLayout handleHeaderBar={true} Component={<LikeVideos/>}/>}></Route>
            <Route path="/subscriptions"  element={<GenericParentLayout handleHeaderBar={true} Component={<Subscriptions/>}/>}></Route>
            <Route path="/channel/:id"  element={<GenericParentLayout handleHeaderBar={true} Component={<div>channel</div>}/>}></Route>
            <Route path="*" element={<Navigate replace to="/"/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

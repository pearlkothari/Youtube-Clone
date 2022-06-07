import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { useState } from 'react';


function App() {
  const [sidebar,handleSidebar]=useState(0);

  function switchSidebar(){
      // console.log(sidebar);
      handleSidebar(value=>1-value);
  }

  return (
    <div className="App">
        <Header switchSidebar={switchSidebar}></Header>
        <div className='app-container'>
            <Sidebar sidebar={sidebar}></Sidebar>
            <Container fluid className='app-main'>
                <HomeScreen></HomeScreen>
            </Container>
        </div>
    </div>
  );
}

export default App;

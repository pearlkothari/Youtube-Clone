import { Container } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className='app-container border border-info'>
            <Sidebar></Sidebar>
            <Container fluid className='app-main border border-warning'>
                <HomeScreen></HomeScreen>
            </Container>
        </div>
    </div>
  );
}

export default App;

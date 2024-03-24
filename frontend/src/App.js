import './App.css';
import { Routes,Route,NavLink}  from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';
import Login from './components/Login';
function App() {
  return (
    
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/home/login' element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Homw from './components/Homw';
import Member from './components/Member';
import Homew from './components/Homew';
import Admin from './components/Admin';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homw/>} />
        <Route path='/All' element={<Member/>} />
        <Route path='/Admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;

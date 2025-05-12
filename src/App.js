
import Homw from './components/Homw';
import Member from './components/Member';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Dashbouard from './components/Dashbouard';
import Admin22 from './components/Admin22';
import Mesreservations from './components/Mesreservations';
import HomeMembre from './components/HomeMembre';
import MemberClient from './components/MemberClient';
import About2 from './components/About2';
import Contact2 from './components/Contact2';
import Paiement from './components/Paiement';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homw/>} />
        <Route path='/cars' element={<Member/>} />
        <Route path='/dashbord' element={<Dashbouard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/dashbord' element={<Dashbouard/>}/>
        <Route path='/manage' element={<Admin22/>}/>

        <Route path='/member' element={<HomeMembre/>}/>
        <Route path='/cars2' element={<MemberClient/>} />
        <Route path='/about2' element={<About2/>}/>
        <Route path='/contact2' element={<Contact2/>}/>
        <Route path='/reservation' element={<Mesreservations/>}/>
        <Route path="/paiement/:reservationId" element={<Paiement/>} />
      </Routes>
    </div>
  );
}

export default App;

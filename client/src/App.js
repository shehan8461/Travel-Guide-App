import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css';
import UserDetails from './component/userdetails';
import UserRegsiter from './component/userregister';
import Sigiriya from './component/sigiriya';
import UserUpdate from './component/userupdate';
import Header from './component/header';
import Home from './component/home';


function App() {
  return (
    <Router>
    <div className="App">
    
    <Header/>


      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<UserRegsiter/>}></Route>
      <Route path="/userdetails" element={<UserDetails/>}></Route>
      <Route path="/update/:id" element={<UserUpdate/>}></Route>
     

      </Routes>
    
 
    </div>
    </Router>
  );
}

export default App;

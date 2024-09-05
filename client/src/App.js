import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CurdOperation from './components/CurdOperation';
import EditUser from './components/EditUser';

import { BrowserRouter,Route,Routes } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element={<CurdOperation/>} />
        <Route path = "/all" element = {<AllUsers />} />
        <Route path = "/add" element = {<AddUser />} />
        <Route path="/edit/:uid" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route} from "react-router-dom";
import AtBoard from "./Page/ArBoard/AtBoard";
import Login from "./Page/Login/Login";
import Registation from "./Page/Login/Registation";
import Navbar from "./Page/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
function App() {
  const [user , setUser] = useState("")
 
  return (
    <div className="App">
      <Navbar user ={user} setUser={setUser}/>
     <Routes>
      <Route path="/registation" element={<Registation/>}></Route>
      <Route path="/" element={<Login  setUser={setUser} />}></Route>
      <Route path="/atboard" element={<AtBoard user={user} />}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;

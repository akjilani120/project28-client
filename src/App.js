import { Routes, Route} from "react-router-dom";
import AtBoard from "./Page/ArBoard/AtBoard";
import Login from "./Page/Login/Login";
import Registation from "./Page/Login/Registation";
import Navbar from "./Page/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Registation/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/atboard" element={<AtBoard/>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;

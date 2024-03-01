import UpperNavBar from "./navigationBar/UpperNavBar";
import Navigation from "./navigationBar/Navigation";
import Marquee from "./navigationBar/Marquee";
import PaperSection from "./dataSection/PaperSection";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./Admin/AdminPanel";
import Login from "./Admin/Login";
// import Department from "./navigationBar/Department";
function App(){
  return(
    <>
    <UpperNavBar />
<Navigation />
<Marquee />
    <Routes>
      <Route path="/" element={<PaperSection />}/>
      <Route path='admin-login' element={<Login />}/>
      <Route path="/admin-panel" element={<AdminPanel />}/>

</Routes>
    </>
  )
}
export default App;

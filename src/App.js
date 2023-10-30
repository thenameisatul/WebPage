import './App.css';
import {Page1} from "./pages/p1/Page1";
import {Page2} from "./pages/p2/Page2";
import {Page3} from "./pages/p3/Page3";
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Page1/>}/>
      <Route path="/p2" element={<Page2/>}/>
      <Route path="/p3" element={<Page3/>}/>
    </Routes>
    </>
  );
}

export default App;

import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    </>
  );
};

export default App;

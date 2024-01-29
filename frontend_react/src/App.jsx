import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Admin from "./pages/admin/Admin";
import Login from "./pages/auth/Login";
import PrivateRoutes from "./components/auth/PrivateRoutes";

const App = () => {
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route element={<PrivateRoutes />} >
            <Route path="/admin/*" element={<Admin/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    </>
  );
};

export default App;

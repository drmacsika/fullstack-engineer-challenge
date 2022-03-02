import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from './pages/Register';
import  { AuthProvider } from "./state/auth"

const App = () => {
    return (
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/create-admin' element={<Register/>}></Route>
          </Routes>
        </AuthProvider>
    );
}

export default App;

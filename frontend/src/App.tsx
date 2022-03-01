import "./index.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from './components/Register';
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

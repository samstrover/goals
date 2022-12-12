import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import DashboardScreen from "./pages/DashboardScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import NoPageFoundScreen from "./pages/NoPageFoundScreen";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Router>
        <div className='container'>
            <Header/>
            <Routes>
                <Route path='/' element={<DashboardScreen/>} />
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/register' element={<RegisterScreen/>}/>
                <Route path='*' element={<NoPageFoundScreen/>}/>
            </Routes>
        </div>
    </Router>
        <ToastContainer/>
    </>
  );
}

export default App;

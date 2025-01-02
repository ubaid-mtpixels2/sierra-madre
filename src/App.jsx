import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import for BrowserRouter
import './App.css';
import Login from './pages/login';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/layout/layout';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use `path` instead of `pathName` */}
        {/* <Route path="/"  element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<Layout />}>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

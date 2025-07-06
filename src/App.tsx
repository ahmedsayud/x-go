import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CarCollection from './pages/CarCollection';
import Car from './pages/Car';
// import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';
import BookingStep2 from './pages/BookingStep2';
import BookingStep3 from './pages/BookingStep3';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/collection" element={<CarCollection />} />
        <Route path="/car" element={<Car />} />
        {/* <Route path="/car/:id" element={<CarDetails />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/step2" element={<BookingStep2 />} />
        <Route path="/booking/step3" element={<BookingStep3 />} />
      </Routes>
    </Router>
  );
};

export default App;

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
import SelectedCarInfo from './pages/SelectedCarInfo';
import BookingStep3 from './pages/BookingStep3';
import Payment from "./pages/Payment";
import BookingSuccess from "./pages/BookingSuccess";
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
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/car/:id" element={<CarDetails />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/step2" element={<SelectedCarInfo />} />
        <Route path="/booking/step3" element={<BookingStep3 />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CarCollection from './pages/CarCollection';
// import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';
import BookingStep2 from './pages/BookingStep2';
import BookingStep3 from './pages/BookingStep3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cars" element={<CarCollection />} />
        {/* <Route path="/car/:id" element={<CarDetails />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/step2" element={<BookingStep2 />} />
        <Route path="/booking/step3" element={<BookingStep3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

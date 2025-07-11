import logo from '../assets/logo.png';

const Footer: React.FC = () => (
  <footer className="w-full mt-10 text-gray-700 text-sm bg-white ">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4 w-full md:w-[90%]">
      {/* الشعار والنص */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
        <img src={logo} alt="XGO Car Rental" className="w-32 mb-2" />
        <p className="text-gray-700 text-center md:text-left max-w-xs">Stay Connected with us to get new update information</p>
      </div>
      {/* الأعمدة */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-center md:text-left">
        <div>
          <h5 className="font-bold mb-2">Product</h5>
          <ul className="space-y-1">
            <li>Features</li>
            <li>Solutions</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Company</h5>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Social</h5>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Resources</h5>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-400 text-xs mt-8 mb-8">&copy; {new Date().getFullYear()} Car App. All rights reserved.</div>
  </footer>
)

export default Footer 
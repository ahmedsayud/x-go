import logo from '../assets/logo.png';

const Footer: React.FC = () => (
  <footer className="w-full   mt-10 text-gray-700 text-sm">
    <div className="max-w-6xl mx-auto flex  sm:flex-row justify-between items-start gap-8 px-4 w-[80%]">
      {/* الشعار والنص */}
      <div className="flex-1 gap-2 m-auto">
        <img src={logo} alt="XGO Car Rental" className="w-32 mb-2" />
        <p className="text-gray-700 sm:w-[330%]">Stay Connected with us to get new update information</p>
      </div>
      {/* الأعمدة */}
      <div className="flex-1 grid lg:grid-cols-4 m-auto text-center sm:grid-cols-2 gap-6 w-full">
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
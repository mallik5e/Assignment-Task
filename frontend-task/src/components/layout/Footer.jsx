import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-12">
      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6">
        {/* Product Section */}
        <div>
          <p className="text-md mb-4">Product</p>
          <ul className="text-md font-semibold space-y-2">
            <li>Overview</li>
            <li>Features</li>
            <div className="flex gap-1"> 
              <li>Solutions</li>
               <span className="border border-green-200 text-green-500 bg-green-50 px-2.5 py-0.5 rounded-2xl text-xs">New</span>
            </div>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <p className="text-md  mb-4">Company</p>
          <ul className="text-md font-semibold space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <p className="text-md mb-4">Resources</p>
          <ul className="text-md font-semibold space-y-2">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <p className="text-md  mb-4">Use cases</p>
          <ul className="text-md font-semibold space-y-2">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS center</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <p className="text-md mb-4">Social</p>
          <ul className="text-md font-semibold space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <p className="text-md mb-4">Legal</p>
          <ul className="text-md font-semibold space-y-2">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-32">
  <img src={assets.logo} alt="Zysk Logo" className="w-20 sm:w-24" />
  <p className="text-xs sm:text-sm font-medium text-gray-500 text-center sm:text-left">
    &copy; 2077 Zysk Technologies. All rights reserved.
  </p>
</div>


    </footer>
  );
};

export default Footer;

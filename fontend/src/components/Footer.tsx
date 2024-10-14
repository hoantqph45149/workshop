function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300 py-10">
      <div className="container mx-auto px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white font-bold text-3xl mb-4">Furniro</h2>
            <p>
              400 University Drive Suite 200
              <br /> Coral Gables, FL 33134 USA
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Location */}
          <div>
            <h3 className="text-white font-semibold mb-4">Location</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@euphoria.in"
                  className="hover:text-white"
                >
                  support@euphoria.in
                </a>
              </li>
              <li>Ahmedabad Main Road</li>
              <li>Udaipur, India- 313002</li>
            </ul>
          </div>
        </div>

        {/* Phần bản quyền */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} Euphoria Folks Pvt Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

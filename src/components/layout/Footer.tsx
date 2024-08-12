import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-6000">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:0800117000" className="hover:text-blue-600">
                  0800 117 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:services@ura.go.ug"
                  className="hover:text-blue-600"
                >
                  services@ura.go.ug
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Plot M193/M194, Nakawa Industrial Area</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.finance.go.ug/"
                  className="hover:text-blue-600"
                >
                  Ministry of Finance
                </a>
              </li>
              <li>
                <a
                  href="https://singlewindow.go.ug/"
                  className="hover:text-blue-600"
                >
                  Uganda Electronic Single Window
                </a>
              </li>
              <li>
                <a href="https://www.eac.int/" className="hover:text-blue-600">
                  East African Customs Union
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 font-semibold">Follow Us</h3>
            <div className="mb-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Youtube size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="#"
                className="block w-full rounded bg-blue-600 px-4 py-2 text-center text-white transition duration-300 hover:bg-blue-700"
              >
                Book An Appointment
              </a>
              <a
                href="#"
                className="block w-full rounded bg-gray-200 px-4 py-2 text-center text-gray-700 transition duration-300 hover:bg-gray-300"
              >
                Help
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p>
            &copy; 2024 Uganda Revenue Authority (URA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

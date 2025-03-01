import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Newsletter Subscription */}
      <div className="bg-black text-white text-center py-8 px-4">
        <h2 className="text-xl font-bold mb-4">
          Stay Up to Date About Our Latest Offers
        </h2>
        <form className="flex justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-2 rounded-l-md border-none w-0"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-r-md font-medium hover:bg-gray-200"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">SHOP.CO</h3>
          <p className="text-sm">
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
          <Link
                  href="https://github.com/"
                  className="hover:text-blue-400"
                  aria-label="Twitter"
                >
            <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.13-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 016.02 0c2.29-1.55 3.3-1.23 3.3-1.23.67 1.68.26 2.92.13 3.23.77.84 1.24 1.92 1.24 3.24 0 4.65-2.8 5.67-5.47 5.98.43.37.81 1.1.81 2.23v3.31c0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
        </svg>
                </Link>
                <Link
                  href="https://x.com/?lang=en"
                  className="hover:text-blue-400"
                  aria-label="Twitter"
                >
             <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M22.46 6c-.77.35-1.5.6-2.33.7a4.09 4.09 0 0 0 1.83-2.27 8.09 8.09 0 0 1-2.6 1 4.08 4.08 0 0 0-7 3.72A11.55 11.55 0 0 1 3 5.2a4.08 4.08 0 0 0 1.27 5.44A4 4 0 0 1 2.8 10v.05a4.08 4.08 0 0 0 3.27 4A4.07 4.07 0 0 1 4.4 14a4.08 4.08 0 0 0 3.82 2.83A8.16 8.16 0 0 1 2 19.5a8.1 8.1 0 0 1-.95-.06A11.51 11.51 0 0 0 6.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.18 8.18 0 0 0 22.46 6z" />
        </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  className="hover:text-blue-400"
                  aria-label="Twitter"
                >
             <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M22.676 0H1.326C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.796.143v3.24h-1.918c-1.504 0-1.795.714-1.795 1.762v2.309h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.326-.595 1.326-1.326V1.326C24 .595 23.405 0 22.676 0z" />
        </svg>
                </Link> 
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/features">
                Features
              </Link>
            </li>
            <li>
              <Link href="/works">
                Works
              </Link>
            </li>
            <li>
              <Link href="/career">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Help</h3>
          <ul>
            <li>
              <Link href="/customer-support">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="/delivery-details">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">FAQ</h3>
          <ul>
            <li>
              <Link href="/account">
                Account
              </Link>
            </li>
            <li>
              <Link href="/orders">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/payments">
                Payments
              </Link>
            </li>
            <li>
              <Link href="/returns">
                Returns
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-center text-sm py-4">
        <p>© 2000-2025 SHOP.CO, All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Image src="/Images/image1.png"
           alt="Visa"
            className="h-6" 
            width={50}
            height= {50}
            />
          <Image src="/Images/image2.png"
           width={50}
           height= {50} 
           alt="PayPal"
            className="h-6" />
          <Image src="/Images/image.png"
           alt="MasterCard" 
           className="h-6"
           width={50}
           height= {50} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

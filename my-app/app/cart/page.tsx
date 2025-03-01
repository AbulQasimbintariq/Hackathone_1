"use client"
import Link from "next/link";
import Footer from "./components/Footer";
import Cart from "./components/cartSection"

export default function cart() {
  return (
    <div>
       <header className="bg-white shadow">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 text-center">
        <span>
          Sign up and get 20% off your first order.{' '}
          <Link href="/signup">
            Sign Up Now
          </Link>
        </span>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {/* <Link href="/shop">
            Shop
          </Link> */}
           <div className="dropdown">
               <button className="dropbtn">Shop</button>
                 <div className="dropdown-content">
                      <Link href="/productDetail">T-Shirt</Link>
                      <Link href="/catagory">Casual</Link>
                      <Link href="#">Track Suit</Link>
                </div>
             </div>
          <Link href="/on-sale">
            On Sale
          </Link>
          <Link href="/new-arrivals">
            New Arrivals
          </Link>
          <Link href="/brands">
            Brands
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8 hidden lg:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-6">
 
               <Link
                  href="/"
                  className="hover:text-blue-400"
               >
              <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm1 2h-2c-3.31 0-6 2.69-6 6v1h14v-1c0-3.31-2.69-6-6-6zm8-2h-3v-3h-2v3H13v2h3v3h2v-3h3v-2z" />
            </svg>
                 </Link>
          <Link
                  href="/cart"
                  className="hover:text-blue-400"
                  aria-label="Twitter"
                >
                         <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H6.4M7 13L5.4 5H2M7 13l-1 5h12l-1-5M5 21a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
            </svg>
                </Link>
        </div>
      </div>
    </header>
    <Cart />
    <Footer />
    </div>
      );
}

import productDetail from "./productDetail"
import Link from "next/link"
const Navbar = () => {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">SHOP.CO</div>
          <ul className="hidden lg:flex space-x-4">
            <li>
            <select>
            <option value="all">Shop</option>
            <option value="electronics">
            <Link href="#"> <a >man product</a>
            </Link>
            </option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="beauty">Beauty & Health</option>
            <option value="kids">Kids & Baby</option>
            <option value="travel">Travel & Adventure</option>
            <option value="crafts">Crafts & Hobbies</option>
            <option value="toys">Toys & Games</option>
            <option value="books">Books & Magazines</option>
            <option value="music">Music & Audio</option>
          </select>
              </li>            
            <li><a href="#">On Sale</a></li>            
            <li><a href="#">New Arrival</a></li>            
            <li><a href="#">Brands</a></li>               
          </ul>
          <div className="space-x-4">
            <input type="text" placeholder="Search for products..." className="border rounded py-1 px-2 w-80" />
            <button className="py-1 px-4 rounded bg-black text-white">Sign Up</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
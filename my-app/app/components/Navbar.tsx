const Navbar = () => {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">SHOP.CO</div>
          <ul className="flex space-x-4">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <div className="space-x-4">
            <input type="text" placeholder="Search for products..." className="border rounded py-1 px-2" />
            <button className="bg-black text-white py-1 px-4 rounded">Sign Up</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
const Footer = () => {
    return (
      <footer className="bg-black text-white p-4 text-center">
        <div className="mb-10 p-2 bg-slate-200 text-black w-fit flex ">
          <h2 className="text-lg mb-2 text-center  ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
         <div className="flex flex-col ">
         <input type="email" placeholder="Enter your email address" className="p-2 rounded mr-2" />
          <button className="px-4 py-2 bg-white text-black rounded">Subscribe to Newsletter</button>
          </div> 
          </div>
        <div className="grid grid-cols-4 gap-4 text-left">
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Help</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery</a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">FAQ</h3>
            <a href="#">Order Inquiries</a>
            <a href="#">Returns</a>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  
  
  
// import Image from 'next/image';
import Head from 'next/head';
// import Navbar from './Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import BrowseByStyle from './components/BrowseByStyle';
import Link from 'next/link';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
  
      <Head>
        <title>Shop.co</title>
        <meta name="description" content="Find clothes that match your style" />
      </Head>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold">SHOP.CO</div>
          <ul className="hidden lg:flex space-x-4">
            <li>
           <Link href="/hello">Shop</Link>
           <Link href="/detailpage">shop</Link>
            {/* <button onClick={()=>router.push("/detailpage")}>shop</button> */}
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
      {/* <Navbar /> */}
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;

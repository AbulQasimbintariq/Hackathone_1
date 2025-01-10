// import Image from 'next/image';
import Head from 'next/head';
import Navbar from './Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import BrowseByStyle from './components/BrowseByStyle';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Shop.co</title>
        <meta name="description" content="Find clothes that match your style" />
      </Head>
      <Navbar />
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

import Image from "next/image";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
const catagorypage= () => {
  return (
    <div>
         <Navbar />
         <HeroSection />
      <main className="container mx-auto py-8">
        <div className="flex">
          <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="font-bold mb-4">Filters</h2>
            {/* Add filter controls here */}
          </aside>
          <div className="w-3/4 p-4">
            <h2 className="font-bold mb-4">Casual</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <Image src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4"
                     width={500} // replace with the actual width of your image
                     height={500}
                  />
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-500">{product.rating}★</span>
                  </div>
                  <div className="text-xl font-bold">${product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
     <Footer />
   </div>
  );
};

export default catagorypage;

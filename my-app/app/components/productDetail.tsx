import Image from "next/image";
const productDetail= () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">On Sale</a></li>
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Brands</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Find Clothes That Matches Your Style</h2>
          <p className="mb-6">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="bg-black text-white px-6 py-2">Shop Now</button>
        </section>

        <section className="py-12">
          <h3 className="text-3xl font-bold mb-6">New Arrivals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Repeat for each product */}
            <div className="border p-4">
              <Image src="image.png" alt="Product Image" className="mb-4" 
                 width={500} // replace with the actual width of your image
                 height={500}
              />
              <h4 className="text-xl font-bold mb-2">T-shirt with Tape Details</h4>
              <p className="text-gray-600">$120</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-3xl font-bold mb-6">Top Selling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Repeat for each product */}
            <div className="border p-4">
              <Image src="image.png" alt="Product Image" className="mb-4"
                 width={500} // replace with the actual width of your image
                 height={500}
              />
              <h4 className="text-xl font-bold mb-2">Vertical Striped Shirt</h4>
              <p className="text-gray-600">$212</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-3xl font-bold mb-6">Browse by Dress Style</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Repeat for each style */}
            <div className="border p-4 text-center">
              <Image src="image.png" alt="Style Image" className="mb-4" 
                 width={500} // replace with the actual width of your image
                 height={500}
              />
              <h4 className="text-xl font-bold">Casual</h4>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-3xl font-bold mb-6">Our Happy Customers</h3>
          <div className="space-y-4">
            {/* Repeat for each review */}
            <div className="border p-4">
              <p>I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
              <p className="mt-2 text-right">- Sarah M.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-100 text-center">
          <h3 className="text-3xl font-bold mb-6">Stay Up to Date About Our Latest Offers</h3>
          <input type="email" placeholder="Enter your email address" className="border p-2 mb-4" />
          <button className="bg-black text-white px-6 py-2">Subscribe to Newsletter</button>
        </section>
      </main>

      <footer className="py-12 text-center">
        <p>&copy; 2000-2023 SHOP.CO. All Rights Reserved</p>
        <p>We have clothes that suit your style and which you are proud to wear. From women to men.</p>
      </footer>
    </div>
  );
};

export default productDetail;

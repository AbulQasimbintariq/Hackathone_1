import Image from "next/image";
const products = [
    { name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: '/images/tape-tshirt.jpg' },
    { name: 'Skinny Fit Jeans', price: 240, rating: 3.5, image: '/images/skinny-jeans.jpg', discount: 20 },
    { name: 'Checkered Shirt', price: 180, rating: 4.5, image: '/images/checkered-shirt.jpg' },
    { name: 'Sleeve Striped T-shirt', price: 130, rating: 4.5, image: '/images/striped-tshirt.jpg' },
  ];
  
  const NewArrivals = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded p-4">
                <Image src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-xl font-semibold">${product.price}</p>
                {product.discount && <p className="text-red-500">-{product.discount}%</p>}
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500">Rating: {product.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default NewArrivals;
  
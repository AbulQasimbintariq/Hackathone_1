import Image from "next/image";

const topProducts = [
    { name: 'Vertical Striped Shirt', price: 212, rating: 5, image: '/images/shirt7.jpg', discount: 20 },
    { name: 'Courage Graphic T-shirt', price: 145, rating: 4, image: '/images/shirt8.jpg' },
    { name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3, image: '/images/shirt9.jpg' },
    { name: 'Faded Skinny Jeans', price: 210, rating: 4.5, image: '/images/shirt10.jpg' },
  ];
  
  const TopSelling = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">TOP SELLING</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {topProducts.map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded p-4">
                <Image src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" 
                   width={500} 
                   height={500}/>
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
  
  export default TopSelling;
  
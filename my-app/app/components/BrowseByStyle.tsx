import Image from "next/image";
const styles = [
    { name: 'Casual', image: '/images/download.jpeg' },
    { name: 'Formal', image: '/images/shirt.jpg' },
    { name: 'Party', image: '/images/shirt1.jpg' },
    { name: 'Gym', image: '/images/shirt2.jpg' },
  ];
  
  const BrowseByStyle = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {styles.map((style, index) => (
              <div key={index} className="bg-white shadow-md rounded p-4 text-center">
                <Image src={style.image} alt={style.name} className="w-full h-48 object-cover mb-4 rounded"
                   width={500} // replace with the actual width of your image
                   height={500}
                    />
                <h3 className="text-lg font-bold">{style.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BrowseByStyle;
  
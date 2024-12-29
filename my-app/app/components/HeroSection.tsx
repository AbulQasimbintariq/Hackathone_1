import Image from "next/image";
const HeroSection = () => {
    return (
      <section className="bg-gray-150 py-20 flex">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="mb-8">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="bg-black text-white py-2 px-6 rounded">Shop Now</button>
        </div>
        <div>
          <Image src="/images/high_res_new_image_2.jpg" alt="Background Image" className="" 
            width={500} // replace with the actual width of your image
            height={500}
          />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
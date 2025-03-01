import Image from 'next/image';
// import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className= "content flex">
        <div>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='HeroP'>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className= "shopNow">Shop Now</button>
        </div>
        <div>
        <Image
        className='rounded-lg'
         src="/Images/HeroPic.jpg"
          alt='HeroPic'
          width={1000} height={500} 
          objectFit="cover"
          />
        </div>
      </div>
      <div className= "brands flex flex-wrap md:min-w-full">
        <Image 
        src="/Images/versace.png" 
        alt="Versace" 
        width={100} height={50} 
        objectFit="cover"/>
        <Image 
        src="/Images/zara.png" 
        alt="Zara" 
        width={100} height={50} 
        objectFit="cover"/>
        <Image 
        src="/Images/gucci.png" 
        alt="Gucci"
         width={100} height={50}
         objectFit="cover" />
        <Image 
        src="/Images/prada.png" 
        alt="Prada"
         width={100} height={50}
         objectFit="cover" />
        <Image 
        src="/Images/calvin.png" 
        alt="Calvin Klein" 
        width={100} height={50} 
        objectFit="cover"/>
      </div>
    </section>
  );
};

export default HeroSection;

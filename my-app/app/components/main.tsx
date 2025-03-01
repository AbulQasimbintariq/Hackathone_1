import Image from 'next/image';
// import styles from './MainSection.module.css';

const MainSection = () => {
  const newArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: '$120', image: '/Images/shirt.jpg' },
    { id: 2, name: 'Skinny Fit Jeans', price: '$240', oldPrice: '$260', image: '/Images/shirt1.jpg' },
    { id: 3, name: 'Checkered Shirt', price: '$180', image: '/Images/shirt5.jpg' },
    { id: 4, name: 'Sleeve Striped T-shirt', price: '$130', oldPrice: '$160', image: '/Images/shirt2.jpg' },
  ];

  const topSelling = [
    { id: 1, name: 'Vertical Striped Shirt', price: '$212', oldPrice: '$232', image: '/Images/shirt3.jpg' },
    { id: 2, name: 'Courage Graphic T-shirt', price: '$145', image: '/Images/shirt4.jpg' },
    { id: 3, name: 'Loose Fit Bermuda Shorts', price: '$80', image: '/Images/tracksuit.jpg' },
    { id: 4, name: 'Faded Skinny Jeans', price: '$210', image: '/Images/shirt6.jpg' },
  ];

  const dressStyles = [
    { id: 1, name: 'Casual', image: '/Images/shirt7.jpg' },
    { id: 2, name: 'Formal', image: '/Images/shirt8.jpg' },
    { id: 3, name: 'Party', image: '/Images/shirt9.jpg' },
    { id: 4, name: 'Gym', image: '/Images/shirt10.jpg' },
  ];

  return (
    <section className= "mainSection">
      <div className= "category">
        <h2>NEW ARRIVALS</h2>
        <div className= "products">
          {newArrivals.map((item) => (
            <div key={item.id} className= "product">
              <Image src={item.image} alt={item.name} width={150} height={200} />
              <h3>{item.name}</h3>
              <p>
                <span>{item.price}</span>
                {item.oldPrice && <span className= "oldPrice">{item.oldPrice}</span>}
              </p>
            </div>
          ))}
        </div>
        <button className= "viewAll">View All</button>
      </div>

      <div className= "category">
        <h2>TOP SELLING</h2>
        <div className= "products">
          {topSelling.map((item) => (
            <div key={item.id} className= "product">
              <Image src={item.image} alt={item.name} width={150} height={200} />
              <h3>{item.name}</h3>
              <p>
                <span>{item.price}</span>
                {item.oldPrice && <span className= "oldPrice">{item.oldPrice}</span>}
              </p>
            </div>
          ))}
        </div>
        <button className= "viewAll">View All</button>
      </div>

      <div className= "category">
        <h2>BROWSE BY DRESS STYLE</h2>
        <div className= "styles">
          {dressStyles.map((style) => (
            <div key={style.id} className="style">
              <Image src={style.image} alt={style.name} width={150} height={150} />
              <h3>{style.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;

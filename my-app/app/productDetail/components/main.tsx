import Image from 'next/image';
// import styles from './MainSection.module.css';

const MainSection = () => {
  const newArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: '$120', image: '/Images/shirt.jpg' },
    { id: 2, name: 'Skinny Fit Jeans', price: '$240', oldPrice: '$260', image: '/Images/shirt1.jpg' },
    { id: 3, name: 'Checkered Shirt', price: '$180', image: '/Images/shirt5.jpg' },
    { id: 4, name: 'Sleeve Striped T-shirt', price: '$130', oldPrice: '$160', image: '/Images/shirt2.jpg' },
  ];

  return (
    <section className= "mainSection">
      <div className= "category">
        <h2>YOU MUGHT ALSO LIKE</h2>
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
         </section>
  );
};

export default MainSection;

// import Image from "next/image";
// import HeroSection from "../HeroSection";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
 
 

// const Cart: React.FC = () => {
//   const cartItems = [
//     {
//       image: 'path/to/image.jpg',
//       name: 'Gradient Graphic T-shirt',
//       price: 145,
//       size: 'Large',
//       color: 'White',
//       quantity: 1,
//     },
//     {
//       image: 'path/to/image.jpg',
//       name: 'Checkered Shirt',
//       price: 180,
//       size: 'Medium',
//       color: 'Red',
//       quantity: 1,
//     },
//     {
//       image: 'path/to/image.jpg',
//       name: 'Skinny Fit Jeans',
//       price: 240,
//       size: 'Large',
//       color: 'Blue',
//       quantity: 1,
//     },
//   ];

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discount = subtotal * 0.2; // Example discount calculation
//   const deliveryFee = 15; // Example delivery fee
//   const total = subtotal - discount + deliveryFee;

//   const handleIncreaseQuantity = (index: number) => {
//     // Logic to increase quantity
//   };

//   const handleDecreaseQuantity = (index: number) => {
//     // Logic to decrease quantity
//   };

//   const handleRemoveItem = (index: number) => {
//     // Logic to remove item
//   };

//   const handleApplyPromoCode = (code: string) => {
//     // Logic to apply promo code
//   };

//   return (
//     <div>
//       <Head>
//         <title>Shopping Cart - Shop.co</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      
//       <Header />
      
//       <main className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        
//         <div className="flex">
//           <section className="w-3/4 pr-4">
//             {cartItems.map((item, index) => (
//               <CartItem
//                 key={index}
//                 {...item}
//                 onIncrease={() => handleIncreaseQuantity(index)}
//                 onDecrease={() => handleDecreaseQuantity(index)}
//                 onRemove={() => handleRemoveItem(index)}
//               />
//             ))}
//           </section>
          
//           <aside className="w-1/4 pl-4">
//             <OrderSummary
//               subtotal={subtotal}
//               discount={discount}
//               deliveryFee={deliveryFee}
//               total={total}
//               onApplyPromoCode={handleApplyPromoCode}
//             />
//           </aside>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Cart;

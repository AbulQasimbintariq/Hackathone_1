import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">SHOP.CO</div>
      <nav>
        <ul className="flex space-x-4">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
      <div>
        <button className="bg-white text-black px-4 py-2">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

interface CartItemProps {
  image: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ image, name, price, size, color, quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 object-cover mr-4" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">Size: {size}</p>
          <p className="text-sm text-gray-600">Color: {color}</p>
          <p className="font-bold">${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={onDecrease} className="bg-gray-200 px-2 py-1">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={onIncrease} className="bg-gray-200 px-2 py-1">+</button>
        <button onClick={onRemove} className="text-red-500 ml-4">🗑</button>
      </div>
    </div>
  );
};

export default CartItem;
import React from 'react';

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  onApplyPromoCode: (code: string) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, discount, deliveryFee, total, onApplyPromoCode }) => {
  const [promoCode, setPromoCode] = React.useState('');

  const handleApplyPromoCode = () => {
    onApplyPromoCode(promoCode);
  };

  return (
    <div className="p-4 border">
      <h2 className="font-bold text-xl mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span className="text-red-500">-${discount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Fee</span>
        <span>${deliveryFee}</span>
      </div>
      <div className="flex justify-between font-bold text-xl mb-4">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="border px-2 py-1 flex-1"
          placeholder="Add promo code"
        />
        <button onClick={handleApplyPromoCode} className="bg-black text-white px-4 py-2 ml-2">Apply</button>
      </div>
      <button className="bg-black text-white px-4 py-2 w-full">Go to Checkout</button>
    </div>
  );
};

export default OrderSummary;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex justify-between">
        <div>SHOP.CO</div>
        <div>Company</div>
        <div>Help</div>
        <div>FAQ</div>
        <div>Resources</div>
      </div>
      <div className="mt-4 text-center">
        &copy; 2023 SHOP.CO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';

const Cart: React.FC = () => {
  const cartItems = [
    {
      image: 'path/to/image.jpg',
      name: 'Gradient Graphic T-shirt',
      price: 145,
      size: 'Large',
      color: 'White',
      quantity: 1,
    },
    {
      image: 'path/to/image.jpg',
      name: 'Checkered Shirt',
      price: 180,
      size: 'Medium',
      color: 'Red',
      quantity: 1,
    },
    {
      image: 'path/to/image.jpg',
      name: 'Skinny Fit Jeans',
      price: 240,
      size: 'Large',
      color: 'Blue',
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // Example discount calculation
  const deliveryFee = 15; // Example delivery fee
  const total = subtotal - discount + deliveryFee;

  const handleIncreaseQuantity = (index: number) => {
    // Logic to increase quantity
  };

  const handleDecreaseQuantity = (index: number) => {
    // Logic to decrease quantity
  };

  const handleRemoveItem = (index: number) => {
    // Logic to remove item
  };

  const handleApplyPromoCode = (code: string) => {
    // Logic to apply promo code
  };

  return (
    <div>
      <Head>
        <title>Shopping Cart - Shop.co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        
        <div className="flex">
          <section className="w-3/4 pr-4">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                {...item}
                onIncrease={() => handleIncreaseQuantity(index)}
                onDecrease={() => handleDecreaseQuantity(index)}
                onRemove={() => handleRemoveItem(index)}
              />
            ))}
          </section>
          
          <aside className="w-1/4 pl-4">
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              deliveryFee={deliveryFee}
              total={total}
              onApplyPromoCode={handleApplyPromoCode}
            />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;

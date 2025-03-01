// pages/cart.js
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145, quantity: 1, img:"/Images/image.png" },
    { id: 2, name: "Checkered Shirt", size: "Medium", color: "Red", price: 180, quantity: 1 },
    { id: 3, name: "Skinny Fit Jeans", size: "Large", color: "Black", price: 240, quantity: 1 },
  ]);

  const discountPercentage = 20; // 20% discount
  const deliveryFee = 15;

  const updateQuantity = (id:any, increment:any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="Mycart" >
      {/* style={{ display: "flex", justifyContent: "space-between", padding: "20px" }} */}
      {/* Cart Items */}
      <div className="orderCart border-2 border-black p-3">
      {/* style={{width: "60%",border:"2px solid black",padding:"10px"}} */}
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px"}}>
            <div>
              <h4>{item.name}</h4>
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
            </div>
            <div>
              <p>${item.price}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="Order border-2 border-black pl-2 pr-2" >
      {/* style={{ width: "35%", border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }} */}
        <h2>Order Summary</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Discount ({discountPercentage}%): -${discount.toFixed(2)}</p>
        <p>Delivery Fee: ${deliveryFee}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
        <input type="text" placeholder="Add promo code" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <button style={{ width: "100%", padding: "10px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px" }}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

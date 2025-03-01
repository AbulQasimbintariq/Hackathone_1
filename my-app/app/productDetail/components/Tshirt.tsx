import { useState } from "react";
import Image from "next/image";

export default function Tshirt() {
  const product = {
    name: "One Life Graphic T-Shirt",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.6,
    description:
      "This graphic tee is perfect for any occasion. Crafted from soft and breathable fabric, it ensures superior comfort all day.",
    colors: ["Green", "Blue", "Black"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/shirt1.jpg",
      "/images/shirt2.jpg",
      "/images/shirt3.jpg",
      "/images/shirt4.jpg",
    ],
    width:[
        "100"
    ],
    height:[
        "150"
    ]
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to "Large"
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type:any) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>T-Shirts</h1>
      <div className="TshirtCart flex gap-5">
      {/* style={{ display: "flex", gap: "20px" }} */}
        {/* Left Section: Images */}
        <div>
          <Image
            src={product.images[0]}
            alt="T-Shirt"
            width={300}
            height={300}
            // style={{ width: "300px",height:"300", border: "1px solid #ddd", borderRadius: "8px" }}
          />
          <div style={{ display: "flex", marginTop: "10px", gap: "5px" }}>
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`T-Shirt ${index}`}
                width={300}
                height={300}
                // style={{ width: "60px", border: "1px solid #ddd", borderRadius: "4px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "1.2em", margin: "10px 0" }}>
            <span style={{ color: "green", fontWeight: "bold" }}>${product.price}</span>{" "}
            <span style={{ textDecoration: "line-through", color: "gray" }}>${product.originalPrice}</span>{" "}
            <span style={{ color: "red" }}>({product.discount}% off)</span>
          </p>
          <p>Rating: {product.rating} ⭐</p>
          <p>{product.description}</p>

          {/* Color Selector */}
          <h4>Select Color:</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  padding: "10px 20px",
                  background: color.toLowerCase(),
                  border: selectedColor === color ? "2px solid black" : "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                {color}
              </button>
            ))}
          </div>

          {/* Size Selector */}
          <h4>Select Size:</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "10px 20px",
                  border: selectedSize === size ? "2px solid black" : "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity Selector */}
          <h4>Quantity:</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => handleQuantityChange("decrement")}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

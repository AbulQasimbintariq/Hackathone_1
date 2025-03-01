// pages/casual.js
import React, { useState } from "react";
import Image from "next/image";

const Casual = () => {
  const [filters, setFilters] = useState({
    price: [0, 500],
    colors: [],
    size: [],
    dressStyle: "",
  });

  const products = [
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, image: "/images/shirt1.jpg", color: "White", size: "Large", rating: 4.5 },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: "/images/shirt2.jpg", color: "Red", size: "Medium", rating: 4.0 },
    { id: 3, name: "Black Striped T-shirt", price: 150, oldPrice: 120, image: "/images/shirt3.jpg", color: "Black", size: "Small", rating: 4.3 },
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, image: "/images/shirt4.jpg", color: "White", size: "Large", rating: 4.5 },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: "/images/shirt5.jpg", color: "Red", size: "Medium", rating: 4.0 },
    { id: 3, name: "Black Striped T-shirt", price: 150, oldPrice: 120, image: "/images/shirt6.jpg", color: "Black", size: "Small", rating: 4.3 },
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, image: "/images/shirt7.jpg", color: "White", size: "Large", rating: 4.5 },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: "/images/shirt8.jpg", color: "Red", size: "Medium", rating: 4.0 },
    { id: 3, name: "Black Striped T-shirt", price: 150, oldPrice: 120, image: "/images/shirt9.jpg", color: "Black", size: "Small", rating: 4.3 },
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, image: "/images/shirt10.jpg", color: "White", size: "Large", rating: 4.5 },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: "/images/shirt2.jpg", color: "Red", size: "Medium", rating: 4.0 },
    { id: 3, name: "Black Striped T-shirt", price: 150, oldPrice: 120, image: "/images/shirt3.jpg", color: "Black", size: "Small", rating: 4.3 },

    // Add more products as needed
  ];

  const handleFilterChange = (key:any, value:any) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const applyFilters = () => {
    // Logic to filter products based on the selected filters
    console.log("Filters applied:", filters);
  };

  return (
    <div className="cartImg flex p-5 gap-3" >
      {/* style={{ display:"flex",padding:"20px", gap:"4%",flexWrap:"wrap-reverse"}} */}
      {/* Filters Section */}
      <div className="filtercart border-2 border-black pr-5" >
      {/* style={{ width: "25%",border:"1px solid black", paddingRight: "20px" }} */}
        <h2>Filters</h2>

        {/* Price Filter */}
        <div>
          <h4>Price</h4>
          <input
            type="range"
            min="0"
            max="500"
            value={filters.price[1]}
            onChange={(e) => handleFilterChange("price", [0, e.target.value])}
          />
          <p>${filters.price[0]} - ${filters.price[1]}</p>
        </div>

        {/* Colors Filter */}
        <div>
          <h4>Colors</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
              <button
                key={color}
                onClick={() =>
                  handleFilterChange("colors", [...filters.colors, color])
                }
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              ></button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <h4>Size</h4>
          {["Small", "Medium", "Large"].map((size) => (
            <div key={size}>
              <input
                type="checkbox"
                value={size}
                onChange={(e) =>
                  handleFilterChange("size", [...filters.size, e.target.value])
                }
              />
              <label>{size}</label>
            </div>
          ))}
        </div>

        {/* Dress Style Filter */}
        <div>
          <h4>Dress Style</h4>
          {["Casual", "Formal", "Gym"].map((style) => (
            <div key={style}>
              <input
                type="radio"
                name="dressStyle"
                value={style}
                onChange={(e) => handleFilterChange("dressStyle", e.target.value)}
              />
              <label>{style}</label>
            </div>
          ))}
        </div>

        <button onClick={applyFilters} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px" }}>
          Apply Filter
        </button>
      </div>

      {/* Products Section */}
      <div className="casualshirts border-2 border-black">
      {/* style={{ width: "70%",border:"1px solid black"}} */}
        <h2>Casual</h2>
        <div style={{gap: "20px",display:"flex",flexWrap:"wrap",flexGrow:"initial"}}>
        {/* display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"  */}
          {products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px",}}>
              <Image src={product.image} alt={product.name}  width={200} height={200}/>
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              {product.oldPrice && <p style={{ textDecoration: "line-through" }}>${product.oldPrice}</p>}
              <p>Rating: {product.rating}⭐</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casual;

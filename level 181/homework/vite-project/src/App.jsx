import React from "react";

const products = [
  {
    id: 1,
    name: "Men's Ski Jacket",
    price: "$299",
    image: "/images/jacket1.jpg",
  },
  {
    id: 2,
    name: "Men's Jacket",
    price: "$349",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=P4%2bK7eBc&id=3C9B49F8C2EEFF8F6EA14AD5A9210EC73D8D2355&thid=OIP.P4-K7eBcEKMIkCCa1umPzQHaHa&mediaurl=https%3a%2f%2fwww.bfgcdn.com%2f1500_1500_90%2f004-4968%2fsalomon-brilliant-jacket-ski-jacket.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3f8f8aede05c10a30890209ad6e98fcd%3frik%3dVSONPccOIanVSg%26pid%3dImgRaw%26r%3d0&exph=1500&expw=1500&q=ski+jacet&FORM=IRPRST&ck=5011FC6640C24A2003169C3BD71F33FB&selectedIndex=0&itb=0",
  },
  {
    id: 3,
    name: "Men's Lightweight Ski Shell",
    price: "$249",
    image: "/images/jacket3.jpg",
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function SkiJacketsPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Men's Ski & Snowboarding Jackets</h1>
        <p>Stay warm, dry, and stylish on the slopes.</p>
      </header>

      <section className="filters">
        <label>
          Sort by:
          <select>
            <option value="featured">Featured</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </label>
      </section>

      <section className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <footer className="page-footer">
        <p> 2026 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}
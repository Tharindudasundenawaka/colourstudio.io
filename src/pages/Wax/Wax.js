import products from "../../Allproducts";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./wax.css";

const Products = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { category } = useParams();

  console.log(category);
  const product = products.filter((prod) => prod.category === category);

  return (
    <div>
      <h2 className="wax-header">{category}</h2>

      <div className="wax-grid">
        {product.map((p) => {
          return (
            <div className="wax-card-body">
              <article className="wax-card-item">
                <header className="wax-card-header">
                  <h1 className="wax-card-title">{p.name}</h1>
                </header>

                <div class="wax-card-img-wrapper">
                  <img
                    src={p.image}
                    alt="wax product"
                    className="wax-card-image"
                  />

                  <Link
                    className="wax-card-more-info"
                    to={`/products/${p.id}`}
                    onClick={handleClick}
                  >
                    {" "}
                    View Product
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;

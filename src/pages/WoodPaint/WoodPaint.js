import products from "../../Allproducts";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./woodPaint.css";

const Products = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { category } = useParams();

  console.log(category);
  const product = products.filter((prod) => prod.category === category);

  return (
    <div>
      <h2 className="wood-paint-header">{category}</h2>

      <div className="wood-paint-grid">
        {product.map((p) => {
          return (
            <div className="wood-paint-card-body">
              <article className="wood-paint-card-item">
                <header className="wood-paint-card-header">
                  <h1 className="wood-paint-card-title">{p.name}</h1>
                </header>

                <div class="wood-paint-card-img-wrapper">
                  <img
                    src={p.image}
                    alt="wood paint"
                    className="wood-paint-card-image"
                  />

                  <Link
                    className="wood-paint-card-more-info"
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

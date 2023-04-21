import products from "../../Allproducts";
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./autoPaintProductsCatergory.css";

const Products = () => {
  const { category } = useParams();

  console.log(category);
  const product = products.filter((prod) => prod.brandName === category);

  return (
    <div>
      <h2 className="auto-paint-category-header">{category}</h2>

      <div className="auto-paint-category-grid">
        {product.map((p) => {
          return (
            <div className="auto-paint-category-card-body">
              <article className="auto-paint-category-card-item">
                <header className="auto-paint-category-card-header">
                  <h1 className="auto-paint-category-card-title">{p.name}</h1>
                </header>

                <div class="auto-paint-category-card-img-wrapper">
                  <img
                    src={p.image}
                    alt="debeer-product"
                    className="auto-paint-category-card-image"
                  />

                  <Link
                    className="auto-paint-category-card-more-info"
                    to={`/products/${p.id}`}
                    onClick={(e) => window.scrollTo(0, 0)}
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

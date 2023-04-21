import { Link } from "react-router-dom";
import React, { useState } from "react";
import products from "../../Allproducts";
import "./products.css";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
      <h1 className="product-header">All Products</h1>
      <div className="product-card-grid">
        {currentProducts.map((product) => {
          return (
            <div className="product-card-body" key={product.id}>
              <article className="product-card-item">
                <header className="product-card-header">
                  <h1 className="product-card-title">{product.name}</h1>
                </header>

                <div class="product-card-img-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-img"
                  />

                  <Link
                    className="product-card-more-info"
                    to={`/products/${product.id}`}
                    onClick={handleClick}
                  >
                    view Product
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagination__button" onClick={prevPage}>
            Previous
          </button>
        )}
        <span className="pagination__text">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <button className="pagination__button" onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
};
export default Products;

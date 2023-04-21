import { useParams } from "react-router-dom";
import products from "../../Allproducts";
import "./singleProduct.css";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((prod) => prod.id === productId);
  const { image, name, description } = product;

  console.log(image);

  return (
    <div>
      <header className="singlePage__header">
        <h1 className="singlePage_title">{name}</h1>
      </header>
      <div className="singlePage__body" key={name}>
        <div>
          <img src={image} alt={name} className="singlePage_image" />
        </div>

        <div className="singlePage_description">
          <h4>Product Description:</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

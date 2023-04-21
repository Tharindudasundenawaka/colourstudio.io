import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page Not found</p>
      <Link to="/" className="btn">
        {" "}
        Back to HomePage{" "}
      </Link>
    </div>
  );
};
export default Error;

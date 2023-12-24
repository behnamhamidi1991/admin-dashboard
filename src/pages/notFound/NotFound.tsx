import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">Oops! :(</h1>
      <h3 className="notFoundSecondTitle">
        Sorry, but this page doesn't exist!
      </h3>
      <Link to="/" className="notFoundButton">
        Go Back To Homepage
      </Link>
    </div>
  );
};

export default NotFound;

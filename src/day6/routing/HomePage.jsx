import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <h1>
      HomePage
      {/* <a href="/about">About</a> */}
      <Link to="about">About</Link>
    </h1>
  );
};

export default HomePage;

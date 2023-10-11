import {Link} from "react-router-dom";

const Navbar = () => {
  console.log("Navbar");
  return (
    <header>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/create"}>
        <button>Create new dog</button>
      </Link>
    </header>
  );
};
export default Navbar;

import { Link } from "react-router-dom";
import "./Header.css";
import Clock from "../pages/Clock";
const Header = (props) => {
  console.log(props.name);
  return (
    <header className="header">
      <nav>
        <div className="header-content">
          <img
            alt="Basketball Icon"
            src="https://www.dpcdsb.org/JOESS/PublishingImages/Pages/Forms/AllItems/Jaguar%20head.png"
            className="icon"
            style={{ width: '80px', height: '80px', marginTop: '15px', marginLeft: '30px'}}
          />
          <p className="slogan">Go Jags Go!</p>
        </div>
      </nav>
      <Link to="/profile" className="name">
        <p>{props.name}</p>
      </Link>
      <Clock />
    </header>
  );
};
export default Header;

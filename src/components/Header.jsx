import {Link} from "react-router-dom";
import "./Header.css";
import Clock from "../pages/Clock";

const Header = (props) => {
    console.log(props.name)
    return (
          <header className="header">
            <nav>
                <img
              alt="Basketball Pic"
              src="https://img.lovepik.com/free-png/20220109/lovepik-basketball-breakthrough-defensive-silhouette-png-image_401326162_wh860.png"
              className="icon"
            />
            </nav>
    
          <Link to = "/profile" className = "name">
            <p>{props.name}</p>
          </Link>
          <Clock />
          </header>

          );
};

export default Header;

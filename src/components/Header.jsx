import {Link} from "react-router-dom";
import "./Header.css";
import Clock from "../pages/Clock";

const Header = (props) => {
    console.log(props.name)
    return (
          <header className="header">
            <nav>
                <img
                  alt="Basketball Icon"
                  src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-basketball-dribble-sports-black-simple-buckle-png-image_4662791.jpg"
                  className="icon"
                  style={{ width: '200px', height: '200px' }}
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

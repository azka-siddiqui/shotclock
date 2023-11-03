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
                  src="https://o.remove.bg/downloads/017e1465-c357-4814-b252-33bf387fec41/pngtree-basketball-dribble-sports-black-simple-buckle-png-image_4662791-removebg-preview.png"
                  className="icon"
                  style={{ width: '60px', height: '60px' }}
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

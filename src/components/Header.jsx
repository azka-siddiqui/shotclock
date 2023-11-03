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
                  src="https://o.remove.bg/downloads/70f480f1-4fda-4fcd-90b6-aeb1ee002561/images-removebg-preview.png"
                  className="icon"
                  style={{ width: '110px', height: '110px' }}
                />

              <Link to = "/">
          
              </Link>
            </nav>
    

    
          <Link to = "/profile" className = "name">
            <p>{props.name}</p>
          </Link>
          <Clock />
          </header>

          );
};

export default Header;
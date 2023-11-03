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
                  src="https://www.dpcdsb.org/JOESS/PublishingImages/Pages/Forms/AllItems/Jaguar%20head.png"
                  className="icon"
                  style={{ width: '80px', height: '80px', marginTop: '15px', marginLeft: '40px'}}
            
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

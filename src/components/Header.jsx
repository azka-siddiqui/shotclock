import {Link} from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    console.log(props.name)
    return (
          <header className="header">
            <nav>
              <a href="https://github.com/1234tgk">
                <img
                  alt="GitHub Icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                  className="icon"
                />
              </a>

              <Link to = "/">
              < img 
                alt = "Home"
                src = "https://cdn-icons-png.flaticon.com/512/25/25694.png"
                className="icon"
                />
              </Link>
            </nav>
    

    
          <Link to = "/profile" className = "name">
            <p>{props.name}</p>
          </Link>
          </header>
          );
};

export default Header;
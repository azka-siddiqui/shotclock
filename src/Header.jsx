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
            </nav>
    
            <div className="name">
              <p>{props.name}</p>
            </div>
          </header>
          );
};

export default Header;
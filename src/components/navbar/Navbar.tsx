import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="./app.svg" alt="app" className="icon" />
        <img src="./expand.svg" alt="expand" className="icon" />
        <div className="notification">
          <img src="./notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/images/avatar.png" alt="user-picture" />
          <span></span>
        </div>
        <img src="./settings.svg" alt="" className="icon" />
        <span>Jane Doe</span>
      </div>
    </nav>
  );
};

export default Navbar;

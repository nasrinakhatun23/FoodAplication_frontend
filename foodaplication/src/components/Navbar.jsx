import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Food App</h2>

      <ul className="menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;

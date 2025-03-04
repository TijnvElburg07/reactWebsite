import './css/Header.css'

function Header({ title }) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <h1 className="header-title">{title}</h1>
    </header>
  );
}

export default Header;

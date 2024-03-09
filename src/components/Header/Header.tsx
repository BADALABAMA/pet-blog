import { onClick } from '../../utills/constants';

import './Header.css';
import Logo from '../Logo/Logo';

const Header = ({ petNameFilter, setPetNameFilter }: any) => {
  const handleNameChange = (event: any) => {
    setPetNameFilter(event.target.value);
  };

  return (
    <header className="header">
      <Logo></Logo>
      <div className="input-wrapper">
        <nav className="navbar navbar-light  ">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                type="text"
                name="petNameFilter"
                value={petNameFilter}
                onChange={handleNameChange}
                placeholder="Search by pet name..."
              />
              <button
                className="btn btn-outline-success bg-light "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <nav className="nav navbar navbar-light" onClick={onClick}>
        <a className="nav-btn btn btn-outline-success  bg-light" href="/">
          HOME
        </a>
        <a className="nav-btn btn btn-outline-success  bg-light" href="/">
          CART
        </a>
        <a className="nav-btn btn btn-outline-success  bg-light" href="/">
          CATALOG
        </a>
        <button className="nav-btn  btn btn-outline-success  bg-light">
          LOGIN
        </button>
      </nav>
    </header>
  );
};

export default Header;

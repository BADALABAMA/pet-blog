import Navigation from '../Navigation/Navigation';

import Logo from '../Logo/Logo';

import './Header.css';
import { Button } from '../Button/Button';

const Header = ({ productNameFilter, setProductNameFilter }: any) => {
  const handleNameChange = (event: any) => {
    setProductNameFilter(event.target.value);
  };

  return (
    <header className="header">
      <Logo></Logo>

      <nav className="navbar navbar-light  ">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              type="text"
              name="productNameFilter"
              value={productNameFilter}
              onChange={handleNameChange}
              placeholder="Search by pet name..."
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </nav>

      <Navigation />
    </header>
  );
};

export default Header;

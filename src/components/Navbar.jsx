import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_web from '/Users/selvarajandhanush/DOCS/ShipMantra/project/client/src/Images/Login/logo_web 5.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const term = searchTerm.toLowerCase();

    if (term === 'home') {
      navigate('/homePage');
    } else if (term === 'orders') {
      navigate('/ordersPage');
    } else if (term === 'profile') {
      navigate('/profilePage');
    } else {
      alert('No matching page found');
    }

    setSearchTerm('');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary Nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/homePage">
            <img src={logo_web} alt="Loading" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active navhome" aria-current="page" href="/homePage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ordersPage">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/homePage">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profilePage">
                  Profile
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

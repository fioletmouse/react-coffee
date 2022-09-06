import React from 'react';
import { NavLink } from 'react-router-dom';
import pages from '../../app/pagesList';
import './Header.css';

function Header() {
  return (
    <div className="row header">
      {
        pages.map((page) => (
          <NavLink
            to={`/${page.path}`}
            className={({ isActive }) => (`${isActive ? 'selected' : ''} col-2 header_btn`)}
          >
            {page.name}

          </NavLink>
        ))
      }

      {/* <div className="offset-3 col-6">
        <header className="text-center">
          <h2 className="header">
            Test-e-e-e-e Coffee
          </h2>
        </header>
      </div> */}
    </div>

  );
}

export default Header;

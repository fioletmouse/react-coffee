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
    </div>
  );
}

export default Header;

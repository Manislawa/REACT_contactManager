import PropTypes from "prop-types";
import React from "react";

const Header = ({ text }) => {
  return (
    <nav className="header">
      <span className="header-hamburger">
      <i className="material-icons">menu</i>
      </span>
      <a href="/" className="header-logo">
        {text}
      </a>
      <ul className="header-nav">
        <li>
          <a href="/" className="header-nav-link">
            <i className="material-icons">home</i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  text: "Moja aplikacja"
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;

// jak dodac js kod do przełącznia menu-hamburger???
// let headerNav=document.querySelector('.header-nav');
// let headerHamburger=document.querySelector('.header-hamburger');

// function toggle(){

//       if(this.classList.contains('active')){
//         headerNav.style.display="none";
//           this.classList.remove('active');
//       }
//       else{
//         headerNav.style.display="flex";
//           this.classList.add('active');

//       }
//   }

// headerHamburger.addEventListener('click',toggle());



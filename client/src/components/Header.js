import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">
            Emaily
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a>Login with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

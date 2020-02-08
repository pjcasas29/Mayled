import React from "react";
import { connect } from "react-redux";
import { logout } from "./../actions";
import { Link } from "react-router-dom";
class Header extends React.Component {
  userLogout = () => {
    this.props.logout();
  };
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a onClick={this.userLogout}>Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.user ? "/surveys" : "/"}
            className="brand-logo left"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);

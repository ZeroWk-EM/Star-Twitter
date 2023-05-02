/* eslint-disable jsx-a11y/anchor-is-valid */
import navImage from "../../asset/nav-logo.svg";

export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={navImage}
            alt="Logo"
            width="40"
            height="30"
            className="d-inline-block align-text-top"
          />
          <b>StarTwitter</b>
        </a>
      </div>
    </nav>
  );
};

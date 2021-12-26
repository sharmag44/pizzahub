/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../image/logo.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar">
        <div className="container-fluid">
          <a className="navbar-brand ">
            <Link to="/">
              <img
                src={logo}
                alt="pizza logo"
                width="100"
                height="80"
                className="d-inline-block p-1  ml-2 Header__logo"
              />
            </Link>
            <h3 className="display-6 d-inline-block fw-bold fst-italic">
              <Link to="/">PizzaHub</Link>
            </h3>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active p-3" aria-current="page">
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon fontSize="large" />
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

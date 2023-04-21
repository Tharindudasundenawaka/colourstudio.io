import React, { useState, useEffect, useRef } from "react";
import Logo from "../../pics/logo-no-background.png";
import { NavLink, useNavigate } from "react-router-dom";
import Products from "../../Allproducts";
import {
  FacebookFilled,
  PhoneFilled,
  MailFilled,
  ClockCircleFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./navBar.css";

function Navbar({ onContactUsLinkClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchResultsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target)
    ) {
      setShowSearchResults(false);
      setSearchTerm("");
      // setShowMenu(false)
    }

    if (navigate) {
      setShowSearchResults(false);
      setSearchTerm("");
    }
  };

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();

    setSearchTerm(event.target.value.toLowerCase());

    if (value === "") {
      setShowSearchResults(false);
    }

    const result = Products.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(result);
    setShowSearchResults(true);
  };

  const phoneNumber = "+94771310079";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  function phonecall() {
    window.location.href = "tel: 077 1310 079";
  }

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <PhoneFilled className="header-phone" />{" "}
          <p className="p-no" onClick={phonecall}>
            {" "}
            0771310079
          </p>
          <MailFilled className="header-email" />{" "}
          <p className="email">thecolourstudio11@gmail.com</p>
          <ClockCircleFilled className="header-time" />{" "}
          <p className="time">MON - SUN 09.00 am - 06.00 pm</p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/thecolourstudio.plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-fb"
          >
            <FacebookFilled />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <WhatsAppOutlined />
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink
            exact
            to="/"
            onClick={(e) => {
              window.scrollTo(0, 0);
              setShowMenu(false);
            }}
          >
            <img src={Logo} alt="Paint Shop Logo" />
          </NavLink>
        </div>

        <button className="navbar-toggle" onClick={handleMenuClick}>
          <span className="navbar-toggle-icon"></span>
        </button>

        <ul className={showMenu ? "navbar-links active" : "navbar-links"}>
          <li>
            <NavLink
              exact
              to="/"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                onContactUsLinkClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <div className="navbar-search">
              <input
                className="navbar-search-input"
                type="text"
                placeholder="Search Products.."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </li>

          {showSearchResults && (
            <div className="search-results" ref={searchResultsRef}>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  onClick={(e) => {
                    navigate(`/products/${item.id}`);
                    handleClick();
                    setShowMenu(false);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

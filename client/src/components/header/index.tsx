import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import menuClosed from "../../assets/img/menu-closed.svg";
import menu from "../../assets/img/menu-opened.svg";
import { LINKS, ROUTE } from "../../constants/routes";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import { useEffect, useState } from "react";
import ChevronRightIcon from "../SVGIcons/ChevronRightIcon";

import "./styles.css";

interface HeaderProps {
  showLogoutBtn?: boolean;
  className?: string;
}

const Header = ({ showLogoutBtn, className }: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isApiLinkHovered, setIsApiLinkHovered] = useState(false);
  const [isGitLinkHovered, setIsGitLinkHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

  const handleLogoutAction = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expiresIn");

    navigate(ROUTE.ROOT);
  };

  return (
    <header className={`header ${className}`} role="banner">
      <nav className={"navBar"}>
        <Link className={"logo"} to={ROUTE.ROOT}>
          <div className="logo-container">
            <img src={logo} alt="logo" />
            <p>{t(translationKeys.LOGO_TITLE)}</p>
          </div>
        </Link>

        <div className="headerEnd desktop-view">
          <div className="header-end-box">
            <a
              className="navLink"
              href={LINKS.API_HOME_PAGE}
              onMouseEnter={() => setIsApiLinkHovered(true)}
              onMouseLeave={() => setIsApiLinkHovered(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p style={{ color: isApiLinkHovered ? "#bfd7ff" : "#B3B8FF" }}>
                {t(translationKeys.HEADER_HOME_NAV_TITLE)}
              </p>
              <ChevronRightIcon
                color={isApiLinkHovered ? "#bfd7ff" : "#B3B8FF"}
                size={14}
              />
            </a>
          </div>
          <div className="header-end-box">
            <a
              className="navLink"
              href={LINKS.GITHUB}
              onMouseEnter={() => setIsGitLinkHovered(true)}
              onMouseLeave={() => setIsGitLinkHovered(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p style={{ color: isGitLinkHovered ? "#bfd7ff" : "#B3B8FF" }}>
                {t(translationKeys.HEADER_HOME_GITHUB_TITLE)}
              </p>
              <ChevronRightIcon
                color={isGitLinkHovered ? "#bfd7ff" : "#B3B8FF"}
                size={14}
              />
            </a>
          </div>
          {showLogoutBtn && (
            <div className="header-end-box">
              <button className="logout-btn" onClick={handleLogoutAction}>
                {t(translationKeys.LOGOUT)}
              </button>
            </div>
          )}
        </div>

        <div className="headerEnd mobile-view">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <img src={isDropdownOpen ? menu : menuClosed} alt="logo" />
          </button>
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="header-end-box-dropdown">
            <a
              className="navLink"
              href={LINKS.GITHUB}
              onMouseEnter={() => setIsApiLinkHovered(true)}
              onMouseLeave={() => setIsApiLinkHovered(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p style={{ color: isApiLinkHovered ? "#bfd7ff" : "#B3B8FF" }}>
                {t(translationKeys.HEADER_HOME_NAV_TITLE)}
              </p>
              <ChevronRightIcon
                color={isApiLinkHovered ? "#bfd7ff" : "#B3B8FF"}
                size={14}
              />
            </a>
          </div>
          <div className="header-end-box-dropdown">
            <a
              className="navLink"
              href={LINKS.GITHUB}
              onMouseEnter={() => setIsGitLinkHovered(true)}
              onMouseLeave={() => setIsGitLinkHovered(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p style={{ color: isGitLinkHovered ? "#bfd7ff" : "#B3B8FF" }}>
                {t(translationKeys.HEADER_HOME_GITHUB_TITLE)}
              </p>
              <ChevronRightIcon
                color={isGitLinkHovered ? "#bfd7ff" : "#B3B8FF"}
                size={14}
              />
            </a>
          </div>
          {showLogoutBtn && (
            <div className="header-end-box-dropdown">
              <button className="logout-btn" onClick={handleLogoutAction}>
                {t(translationKeys.LOGOUT)}
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

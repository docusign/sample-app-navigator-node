import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import menuClosed from "../../assets/img/menu-closed.svg";
import menu from "../../assets/img/menu-opened.svg";
import chevronRight from "../../assets/img/chevron-right.svg";
import { LINKS, ROUTE } from "../../constants/routes";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import { useEffect, useState } from "react";
import "./styles.css";

interface HeaderProps {
  showLogoutBtn?: boolean;
  className?: string;
}

const Header = ({ showLogoutBtn, className }: HeaderProps) => {
  const { t } = useTranslation();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isDropdownOpen) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

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
              href={LINKS.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>{t(translationKeys.HEADER_HOME_NAV_TITLE)}</p>
              <img src={chevronRight} alt="chevron-right" />
            </a>
          </div>
          <div className="header-end-box">
            <a
              className="navLink"
              href={LINKS.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>{t(translationKeys.HEADER_HOME_GITHUB_TITLE)}</p>
              <img src={chevronRight} alt="chevron-right" />
            </a>
          </div>
          {showLogoutBtn && (
            <div className="header-end-box">
              <button className="logout-btn">{"logout"}</button>
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
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>{t(translationKeys.HEADER_HOME_NAV_TITLE)}</p>
              <img src={chevronRight} alt="chevron-right" />
            </a>
          </div>
          <div className="header-end-box-dropdown">
            <a
              className="navLink"
              href={LINKS.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>{t(translationKeys.HEADER_HOME_GITHUB_TITLE)}</p>
              <img src={chevronRight} alt="chevron-right" />
            </a>
          </div>
          {showLogoutBtn && (
            <div className="header-end-box-dropdown">
              <button className="logout-btn">{"logout"}</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

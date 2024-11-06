import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import menuClosed from "../../assets/img/menu-closed.svg";
import menu from "../../assets/img/menu-opened.svg";
import { API_LINKS, LINKS, ROUTE } from "../../constants/routes";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import { useCallback, useEffect, useMemo, useState } from "react";
import NavLink from "./navLink/navLink";
import axios from "axios";

import "./styles.css";

interface HeaderProps {
  showLogoutBtn?: boolean;
  className?: string;
}

const Header = ({ showLogoutBtn, className }: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const handleLogoutAction = useCallback(async () => {
    try {
      const logoutUrl = API_LINKS.LOGOUT;
      await axios.post(logoutUrl, {}, { withCredentials: true });

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresIn");

    } catch (error) {
      console.log("Logout failed", error);
    }

    navigate(ROUTE.ROOT);
  }, [navigate]);

  const renderNavLinksContentButton = useMemo(() => {
    const boxClass = `header-end-box${isDropdownOpen ? "-dropdown" : ""}`;

    return (
      <>
        <div className={boxClass}>
          <NavLink
            href={LINKS.API_HOME_PAGE}
            titleKey={translationKeys.HEADER_HOME_NAV_TITLE}
          />
        </div>
        <div className={boxClass}>
          <NavLink
            href={LINKS.GITHUB}
            titleKey={translationKeys.HEADER_HOME_GITHUB_TITLE}
          />
        </div>
        {showLogoutBtn && (
          <div className={boxClass}>
            <button className="logout-btn" onClick={handleLogoutAction}>
              {t(translationKeys.LOGOUT)}
            </button>
          </div>
        )}
      </>
    );
  }, [isDropdownOpen, handleLogoutAction, showLogoutBtn, t]);

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
          {renderNavLinksContentButton}
        </div>

        <div className="headerEnd mobile-view">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <img src={isDropdownOpen ? menu : menuClosed} alt="logo" />
          </button>
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="dropdown-content">{renderNavLinksContentButton}</div>
      )}
    </header>
  );
};

export default Header;

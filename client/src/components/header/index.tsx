import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import menuClosed from "../../assets/img/menu-closed.svg";
import menu from "../../assets/img/menu-opened.svg";
import { LINKS, ROUTE } from "../../constants/routes";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import { useCallback, useEffect, useMemo, useState } from "react";
import NavLink from "./navLink/navLink";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { logoutAction } from "../../store/state/auth";
import { getIsAuthenticatedSelector } from "../../store/state/auth/selectors";
import "./styles.css";

interface HeaderProps {
  showLogoutBtn?: boolean;
  className?: string;
}

const Header = ({ showLogoutBtn, className }: HeaderProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(getIsAuthenticatedSelector);

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

  const handleLogoutAction = useCallback(() => {
    dispatch(logoutAction() as any);
    navigate(ROUTE.ROOT);
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTE.ROOT);
    }
  }, [isAuthenticated, navigate]);

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
        <Link className={"logo"} to={ROUTE.ROOT} onClick={handleLogoutAction}>
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

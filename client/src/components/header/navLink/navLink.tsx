import { useTranslation } from "react-i18next";
import { useState } from "react";
import ChevronRightIcon from "../../SVGIcons/ChevronRightIcon";
import "../styles.css";

interface NavLinkProps {
  href: string;
  titleKey: string;
}

const NavLink = ({ href, titleKey }: NavLinkProps) => {
  const { t } = useTranslation();

  return (
    <a
      className="navLink"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <p className="navLink-text">{t(titleKey)}</p>
      <ChevronRightIcon className="navLink-icon" size={14} />
    </a>
  );
};

export default NavLink;

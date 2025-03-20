import "../styles/Nav.css";
import { useState } from "react";
import Button from "./Button.jsx";

export default function Nav() {
  const sections = [
    {
      title: "O mnie",
      path: "o-mnie",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Usługi",
      path: "usługi",
    },
    {
      title: "Opinie",
      path: "opinie",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
  };

  return (
    <section style={{ background: "var(--clr-light)", paddingBlock: "0" }}>
      <div className="container nav">
        <b>Poprawianka</b>
        <div className="links">
          {sections.map((section) => (
            <a href={`#${section.path}`} key={section.path}>
              {section.title}
            </a>
          ))}
          <Button type="primary">
            <a href="#kontakt">Kontakt</a>
          </Button>
        </div>
        <img
          className="menu-btn"
          src={`/icons/${isMenuOpen ? "close" : "burger"}-icon.svg`}
          alt="toggle menu"
          onClick={toggleMenu}
        />
        <div className={`mobile-menu ${isMenuOpen && "open"}`}>
          <div className="menu-title">
            <b>Menu</b>
            <img
              src="/icons/close-icon.svg"
              alt="close-menu"
              onClick={toggleMenu}
            />
          </div>
          <div className="menu-items">
            {sections.map((section) => (
              <a href={`#${section.path}`} key={section.path}>
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "gatsby";
import React, { useContext, useState } from "react";
import { menu } from "../constants/menu";
import HeaderStyles from "../styles/HeaderStyles";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import Logo from "./Logo";
import ActionButton from "./buttons/ActionButton";
import clsx from "clsx";
import { SearchModalContext } from "../context/searchModalContext";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {openSearchModal}=useContext(SearchModalContext)

  const handleSearchModalOpen=()=>{
      openSearchModal()
  }
  const handleNavItemClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };
  return (
    <>
      <HeaderStyles>
        <div className="container">
          <div className="header__container">
            <div className="logo">
              <Logo />
            </div>
            <div className={clsx("nav__wrapper", isNavOpen && "open")}>
              <div className="mobileIcon">
                <div className="searchIcon">
                  <div className="searchIcon__wrapper"
                  onClick={handleSearchModalOpen}
                  onKeyDown={handleSearchModalOpen}
                  tabIndex={0}
                  role="button">
                    <MdSearch />
                  </div>
                </div>
                <ActionButton
                  className="mobileMenuBtn"
                  onClick={() => setIsNavOpen(true)}
                  onKeyDown={() => setIsNavOpen(true)}
                >
                  <MdMenu />
                </ActionButton>
              </div>
              {isNavOpen && (
                <div
                  className="mobileNavBg"
                  aria-label="close menu"
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(false)}
                />
              )}
              <nav>
                <ActionButton
                  className="mobileMenuCloseBtn"
                  onClick={() => setIsNavOpen(false)}
                  onKeyDown={() => setIsNavOpen(true)}
                >
                  <MdClose />
                </ActionButton>
                <ul>
                  {menu.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} onClick={handleNavItemClick}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li className="searchIcon">
                    <div className="searchIcon__wrapper"
                    onClick={handleSearchModalOpen}
                    onKeyDown={handleSearchModalOpen}
                    tabIndex={0}
                    role="button">
                      <MdSearch />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </HeaderStyles>
    </>
  );
};

export default Header;

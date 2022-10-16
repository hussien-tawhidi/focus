import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { headermenu, searchcontainer } from "./headerData";

const HeaderMenu = () => {
  const [mobileIcone, setMobileIcone] = useState(false);
  const [searchContainer, setSearchContainer] = useState(false);
  const mobile = () => {
    setMobileIcone(!mobileIcone);
  };
  const searchcontainerfunc = () => {
    setSearchContainer(!searchContainer);
  };
  return (
    <div className="header-menu">
      <Link to="/" className="logo">
        <img src="Assets/logo.png" alt="" />
        <div className="search-mobile" onClick={searchcontainerfunc}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </Link>
      <div
        className={
          mobileIcone
            ? "menu center-elements show-menu"
            : "menu center-elements"
        }
      >
        {headermenu.map((h) => {
          return (
            <div key={h.id}>
              <Link
                to={h.linkTo}
                className={
                  mobileIcone ? "menu-list show-menu-list" : "menu-list"
                }
              >
                {h.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="phone center-elements">
        {/* <p>+1 234 567 8910</p> */}
        <div className="search" onClick={searchcontainerfunc}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="whats-up">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      {/* search container start*/}
      <div
        className={
          searchContainer
            ? "search-container show-search-container"
            : "search-container"
        }
      >
        <div className="search-input-content">
          <div
            className={
              searchContainer
                ? "close-search-container show-close-search-container"
                : "close-search-container"
            }
            onClick={searchcontainerfunc}
          >
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
          <input
            type="text"
            placeholder="  ...  جستجو "
            className={
              searchContainer
                ? "search-input show-search-input"
                : "search-input"
            }
          />
          <div
            className={
              searchContainer
                ? "searching-icon show-searching-icon"
                : "searching-icon"
            }
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="search-container-content">
          <div className="search-container-title">
            <p>دسترسی سریع</p>
          </div>
          <div className="fast-links">
            {searchcontainer.map((s) => {
              return (
                <Link
                  to={s.linkTo}
                  className={
                    searchContainer
                      ? "fast-access-links show-search-links"
                      : "fast-access-links"
                  }
                  key={s.id}
                >
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* search container  end*/}
      {/* burger icon */}
      <div className="burger-menu" onClick={mobile}>
        <div
          className={mobileIcone ? "burger-icon active-mobile" : "burger-icon"}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      <div
        className={searchContainer ? "overlay show-overlay" : "overlay"}
      ></div>
    </div>
  );
};

export default HeaderMenu;

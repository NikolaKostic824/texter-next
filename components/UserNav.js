import Link from 'next/link'
import { useState } from "react";

const UserNav = () => {
    const [burger, setBurger] = useState(true);
  
    const noMenu = {
      display: "none",
    };
    const menuActive = {
      display: "inline-block",
    };
    const menuActiveMobileWrapper =  {
      display:"block"
    }
    const menuActiveMobile = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height:"90%"
    }
    const menuActiveBurger = {
      width: "20%",
      marginRight: "0",
    };
    const menuBurger = {
      backgroundColor: "#000",
    };
    return ( 
      <>
        <nav role="navigation" id="desktop" className="navigation">
          <h1>
            <Link href="/">TEXTER</Link>
          </h1>
          <div className="menuToggle">
            <div className="menu" style={burger ? noMenu : menuActive}>
              <Link href="/" >
                <a onClick={() => setBurger(true)}>
                  Home
                </a>
              </Link>
              <Link href="/autori">
                <a onClick={() => setBurger(true)}>
                  Autori
                </a>
              </Link>
              <Link href="/mimovi">
                <a onClick={() => setBurger(true)}>
                  Mimovi
                </a>
              </Link>
            </div>

            <div
              className="burger"
              onClick={() => setBurger(burger === true ? false : true)}
            >
              <span
                className="bar"
                style={burger ? menuBurger : menuActiveBurger}
              ></span>
              <span></span>
              <span
                className="bar"
                style={burger ? menuBurger : menuActiveBurger}
              ></span>
            </div>
          </div>
        </nav>

        <nav role="navigation" id="mobile" className="navigation">
          <div className="nav-mobile-wrapper">
            <h1 onClick={() => setBurger(true)}>
              <Link href="/">TEXTER</Link>
            </h1>
            <div className="menuToggle">
              <div
                className="burger"
                onClick={() => setBurger(burger === true ? false : true)}
              >
                <span
                  className="bar"
                  style={burger ? menuBurger : menuActiveBurger}
                ></span>
                <span></span>
                <span
                  className="bar"
                  style={burger ? menuBurger : menuActiveBurger}
                ></span>
              </div>
            </div>
          </div>

          <div id="menuMobile" className="menu" style={burger ? noMenu : menuActiveMobileWrapper}>
            <div style={menuActiveMobile}>
              <Link href="/" >
                <a onClick={() => setBurger(true)}>
                 Home
                </a>
              </Link>
              <Link href="/autori" >
                <a onClick={() => setBurger(true)}>
                  Autori
                </a>
              </Link>
              <Link href="/mimovi">
                <a onClick={() => setBurger(true)}>
                  Mimovi
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
}
 
export default UserNav;
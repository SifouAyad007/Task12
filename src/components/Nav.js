import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Cal } from "../img/calculation.svg";
import { ReactComponent as Mes } from "../img/measering.svg";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css" ; 



const Nav = () => {
    return (
      <div className={styles.nav}>
        <div >
        <Link to="/"> <Logo/></Link>
        </div>
        <ul className={styles.menu}>
        <div className={styles.titles}>
          <li><Link to="/services"> Services </Link></li>
          <li><Link to="/products"> Products </Link></li>
          <li><Link to="/aboutus"> About-us </Link></li>
          <li><Link to="/portfolio"> Portfolio </Link></li>
          <li><Link to="/FAQ"> FAQ </Link></li>
          <li><Link to="/contacts"> Contact </Link></li>

        </div>
          
          <div className={styles.btn}>
          <Link to="/make-request"><button className={styles.orangebtn}><Cal/>   Make request</button> </Link>
          <Link to="/calculations"><button className={styles.purplebtn}><Mes/>   Calculation</button>  </Link>
        </div>  
        </ul>
      
      </div>
    );
  };
  
  export default Nav;
  
  
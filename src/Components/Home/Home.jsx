import React from "react";
import Logo from "../../assets/Logo.svg";
import Lawyers from "../../assets/LawyersImg.svg";
import inputdiv from "../../assets/InputDiv.svg";
import inputBtn from "../../assets/inputBtn.svg";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img className={styles.img} src={Logo} alt="logo" />
          {/* <p className={styles.logoname}>IGSTUDIO</p> */}
        </div>

        <ul className={styles.pagelinks}>
          <li>
            <NavLink to="/" className={styles.links}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chooseus" className={styles.links}>
              Attroneys
            </NavLink>
          </li>
          <li>
            <NavLink to="/Areaofpractice" className={styles.links}>
              Practice Areas
            </NavLink>
          </li>
          <li>
            <NavLink to="/TeamInfo" className={styles.links}>
              About Us
            </NavLink>
          </li>
        </ul>
        <button className={styles.contactNowbtn}>Contact Now</button>
      </nav>
      <div className={styles.mainContent}>
        <div className={styles.content}>
          <h1>You don’t have to Fight them Alone.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={styles.inputdiv}>
            {/* <input
              className={styles.input}
              placeholder="Enter your email address"
            />
            <button className={styles.inputBtn}>Let's Talk</button> */}
            <img
              className={styles.input}
              src={inputdiv}
              alt="input-div"
              placeholder="Enter your email address"
            />
            <img className={styles.inputBtn} src={inputBtn} alt="input-btn" />
          </div>

          {/* <textarea
            className={styles.input}
            placeholder="Enter your email address">
            <button className={styles.inputBtn}>Let's Talk</button>
          </textarea> */}
        </div>
        <img src={Lawyers} alt="Lawyers Image" />
      </div>
    </div>
  );
};

export default Home;

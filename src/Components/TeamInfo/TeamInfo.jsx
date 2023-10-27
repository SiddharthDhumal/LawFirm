import React from "react";
import styles from "./TeamInfo.module.css";
import team1 from "../../assets/team1.svg";
import team2 from "../../assets/team2.svg";
import team3 from "../../assets/team2_01.svg";
import team4 from "../../assets/team4.svg";
import team5 from "../../assets/team5.svg";
import team6 from "../../assets/team6.svg";
import caseinjury from "../../assets/caseinjury.svg";
import igstudiologo from "../../assets/igstudiologo.svg";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import socialMedia from "../../assets/socialmedialogo.svg";

const TeamInfo = () => {
  return (
    <div>
      <NavLink to="/" className={styles.homepage}>
        Back to Home
      </NavLink>
      <div className={styles.ourteam}>
        <h1 className={styles.header}>Our Team</h1>
        <div className={styles.teams}>
          <img className={styles.imgs} src={team1} alt="team1" />
          <div
            style={{
              backgroundColor: "#E3B748",
              height: "109px",
              width: "344px",
              borderRadius: "14px",
              // textAlgin: "center",
            }}>
            <img
              style={{ margin: "1rem auto" }}
              className={styles.imgs}
              src={team3}
              alt="team3"
            />
          </div>

          <img className={styles.imgs} src={team2} alt="team2" />
          <img className={styles.imgs} src={team4} alt="team4" />
          <img className={styles.imgs} src={team5} alt="team5" />
          <img className={styles.imgs} src={team6} alt="team6" />
        </div>
      </div>
      <div className={styles.faq}>
        <div>
          <h2 className={styles.faqheader}>FAQ</h2>
          <p className={styles.faqpara}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div>
          <img src={caseinjury} alt="injury" />
        </div>
      </div>
      <div className={styles.newsSeller}>
        <div className={styles.newsSellerDiv}>
          <h2 className={styles.newSellerHeader}>Subscribe Our Newsletter</h2>
          <input className={styles.inputnewsSeller1} placeholder="Name" />
          <input
            className={styles.inputnewsSeller2}
            placeholder="Enter your Email"
          />
          <button className={styles.sendBtn}>Send</button>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaDiv}>
          {/* <img src={igstudiologo} alt="igstudiologo" /> */}
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
          <img src={socialMedia} alt="socialmedia" />
        </div>
        <div className={styles.copyright}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;

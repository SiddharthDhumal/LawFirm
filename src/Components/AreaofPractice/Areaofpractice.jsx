import React from "react";
import styles from "./Areaofpractice.module.css";
import businessLaw from "../../assets/businessLaw.svg";
import businessLaw2 from "../../assets/businessLaw2.svg";
import elderAbuse from "../../assets/elderAbuse.svg";
import landdispute from "../../assets/LandDispute.svg";
import partnershiplaw from "../../assets/partnershipLaw.svg";
import realeastate from "../../assets/realestateLaw.svg";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";
import rightArrow2 from "../../assets/rightArrow2.svg";
import firstClient from "../../assets/firstClient.svg";
import secondClient from "../../assets/secondClient.svg";
import thirdClient from "../../assets/thirdClient.svg";
import { NavLink } from "react-router-dom";

const Areaofpractice = () => {
  return (
    <div className={styles.PracticeAreas}>
      <NavLink to="/" className={styles.homepage}>
        Back to Home
      </NavLink>
      <h1 className={styles.areaofPractice}>Area of Practices</h1>
      <div className={styles.lawImages}>
        <div className={styles.images}>
          <img
            className={styles.businessLaw}
            src={businessLaw}
            alt="businesslaw"
          />
          <h4 className={styles.imagetags}>Business Law</h4>
        </div>
        <div className={styles.images}>
          <img
            className={styles.partnershiplaw}
            src={partnershiplaw}
            alt="partnershiplaw"
          />
          <h4 className={styles.imagetags}>partnership Law</h4>
        </div>

        <div className={styles.images}>
          <img
            className={styles.businessLaw2}
            src={businessLaw2}
            alt="businessLaw2"
          />
          <h4 className={styles.imagetags}>Business Law</h4>
        </div>

        <div className={styles.images}>
          <img
            className={styles.realeastate}
            src={realeastate}
            alt="realeastate"
          />
          <h4 className={styles.imagetags}>Real Estate Law</h4>
        </div>

        <div className={styles.images}>
          <img
            className={styles.landdispute}
            src={landdispute}
            alt="landdispute"
          />
          <h4 className={styles.imagetags}>LandLord Disputes</h4>
        </div>
        <div className={styles.images}>
          <img
            className={styles.elderAbuse}
            src={elderAbuse}
            alt="elderAbuse"
          />
          <h4 className={styles.imagetags}>Elder Abuse</h4>
        </div>
      </div>
      <div className={styles.clientsReview}>
        <div className={styles.clientHeader}>
          <h2 className={styles.clienttag}>What says our happy Clients</h2>
          <div className={styles.arrows}>
            <img src={leftArrow} alt="leftarrow" />
            <img src={rightArrow2} alt="rightarrow" />
          </div>
        </div>
        <div className={styles.clients}>
          <div className={styles.firstClient}>
            <img src={firstClient} alt="firstClient" />
            <div className={styles.clientscontainer}>
              <h3 className={styles.clientName}>Jane Cooper</h3>
              <p className={styles.clientdesignation}>Ceo of Hunt</p>
            </div>

            <p className={styles.clientsays}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div className={styles.secondClient}>
            <img src={secondClient} alt="secondClient" />
            <div className={styles.clientscontainer}>
              <h3 className={styles.clientName}>Jane Cooper</h3>
              <p className={styles.clientdesignation}>Ceo of Hunt</p>
            </div>

            <p className={styles.clientsays}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
          <div className={styles.thirdClient}>
            <img src={thirdClient} alt="thirdClient" />
            <div className={styles.clientscontainer}>
              <h3 className={styles.clientName}>Jane Cooper</h3>
              <p className={styles.clientdesignation}>Ceo of Hunt</p>
            </div>

            <p className={styles.clientsays}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Areaofpractice;

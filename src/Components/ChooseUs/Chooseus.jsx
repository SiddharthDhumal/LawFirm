import React from "react";
import styles from "./Chooseus.module.css";
import successrate from "../../assets/successrate.svg";
import { NavLink } from "react-router-dom";
// import Line from "../../assets/Line.svg";

const Chooseus = () => {
  return (
    <div className={styles.chooseus}>
      <NavLink to="/" className={styles.homepage}>
        Back to Home
      </NavLink>
      <div className={styles.introduce}>
        <h1 className={styles.headTag}>Let’s Introduce Ourself</h1>
        {/* <img src={Line} alt="line" className={styles.line} /> */}
        {/* <Line /> */}
        <hr className={styles.line} />
        <div className={styles.criminalLawyer}>
          <h3 className={styles.h3Heading}>Criminal Lawyer</h3>
          <p className={styles.para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div className={styles.why}>
        <h3 className={styles.whyus}>Why Choose us?</h3>
        <div className={styles.whychooseUs}>
          <div className={styles.nineeightpercent}>
            <img src={successrate} alt="successrate" />
            <h4 className={styles.success}>98% Success Rate</h4>
            <p className={styles.successpara}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.readmoreBtn}>Read More</button>
          </div>
          <div className={styles.nineeightpercent}>
            <img src={successrate} alt="successrate" />
            <h4 className={styles.success}>100% Success Rate</h4>
            <p className={styles.successpara}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.readmoreBtn}>Read More</button>
          </div>
          <div className={styles.nineeightpercent}>
            <img src={successrate} alt="successrate" />
            <h4 className={styles.success}>100% Success Rate</h4>
            <p className={styles.successpara}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.readmoreBtn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;

import React from 'react'
import styles from './Footer.module.css'
import {BrowserRouter as Router} from 'react-router-dom'

function Footer() {
  return (
    <Router>
        <div className={styles["footer-container"]}>
         <div className={styles["footer-socials"]}>
          <a href="https://www.linkedin.com/in/jakub-petergáč-050338238/">
            <img src={require("../assets/linkedin.png")} alt="linkedin" className={styles["footer-icon"]}/>
          </a>
          <a href="https://github.com/Asajco/recipes-web">
            <img src={require("../assets/github.png")} alt="git" className={styles["footer-icon"]}/>
          </a>
          <a href='https://www.instagram.com/jakubpetergac_/' alt="ig">
            <img src={require("../assets/instagram.png")} alt="ig" className={styles["footer-icon"]}/>
          </a>
         </div>
        <div className={styles["footer-text-wrapper"]}>
          <p className={styles["footer-text"]}>© All rights reserved by Jakub Petergáč</p>
          <p className={styles["footer-text"]}>petergacj@gmail.com</p>
        </div>
        </div>
    </Router>
  )
}

export default Footer
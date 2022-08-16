import React from 'react'
import styles from "./Spinner.module.scss"

function Spinner() {
  return (
    <div id={styles["cooking"]}>
        <div className={styles["bubble"]}></div>
        <div className={styles["bubble"]}></div>
        <div className={styles["bubble"]}></div>
        <div className={styles["bubble"]}></div>
        <div className={styles["bubble"]}></div>
        <div id={styles["area"]}>
            <div id={styles["sides"]}>
                <div id={styles["pan"]}></div>
                <div id={styles["handle"]}></div>
            </div>
            <div id={styles["pancake"]}>
                <div id={styles["pastry"]}></div>
            </div>
        </div>
    </div>
  )
}

export default Spinner
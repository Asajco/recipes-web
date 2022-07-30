import React from 'react'
import styles from './Card.module.css'


function Card(props) {
  return (
    <div className={styles["card-container"]}>
    <h2 className={styles["card-title"]}>{props.title}</h2>
    <img src={props.image} alt="" className={styles["card-image"]}/>
    <div className={styles["recipe-info"]}>
        <p><b className={styles["recipe-specific-info"]}>Coisine</b><br/> {props.cousine}</p>
        <p><b className={styles["recipe-specific-info"]}>Meal Type</b> <br/>{props.mealType}</p>
        <a className={styles["recipe-link"]}href={props.link}>Link</a>
    </div>
    </div>
  )
}

export default Card
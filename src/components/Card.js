import React from 'react'
import styles from './Card.module.css'


function Card(props) {
  return (
    <div className={styles["card-container"]}>
    <h2 className={styles["card-title"]}>{props.title}</h2>
    <img src={props.image} alt="" className={styles["card-image"]}/>
    <div className={styles["recipe-info"]}>
        <p><b>Coisine:</b> {props.cousine}</p>
        <p>Meal type: {props.mealType}</p>
    </div>
    </div>
  )
}

export default Card
import React from 'react'
import styles from './Modal.module.css'

function Modal({closeModal, ingrediences}) {
  return (
    <div className={styles["modal-container"]}>
       <div className={styles["modal-wrapper"]}>
            <p>{ingrediences}</p>
            <button onClick={()=> closeModal(false)}>X</button>
       </div> 
    </div>
  )
}

export default Modal
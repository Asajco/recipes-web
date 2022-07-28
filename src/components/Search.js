import React, { useState } from 'react'
import styles from "./Search.module.css"


function Search() {
  const [ingrediences, setIngrediences] = useState([])
  const [currentIngredience, setCurrentIngredience] = useState('')
  
     function insertCurrentIngrediece(event){
      event.preventDefault()
      setCurrentIngredience(prevState => {
        return [...prevState, event.target.value]
      }
      )
    }
   
    function insertIngrediece(event){
      event.preventDefault()
      setIngrediences(prevState => {
        return [...prevState, currentIngredience.slice(-1)]})
        console.log(ingrediences)
     
    }
  
  function displayIngrediences(){
    return ingrediences.map(ingredience => {
      return <p>{ingredience}</p>
    }
    )
  }
 
  return (
    <div>
      <form onSubmit={insertCurrentIngrediece} className={styles["form-wrapper"]}>
        <input onChange={insertCurrentIngrediece} type="text" placeholder="Type your ingrediece one by one..." name="yourIngredience" className={styles["form-input"]}></input>
        <button onClick={insertIngrediece}>Add</button>
      </form>
     {/* <button onClick={insertIngrediece}>insert ingredience</button> */}
      <div>
        {ingrediences.length===0 ? <div className={styles["display-none"]}></div> : <div className={styles["ingrediences-wrapper"]}> {displayIngrediences()}</div>}
      </div>
    </div>
  )
}

export default Search
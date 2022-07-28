import React, { useState, useEffect } from 'react'
import styles from "./Search.module.css"
import Filter from './Filter'
import Card from './Card'

function Search() {
  const [ingrediences, setIngrediences] = useState([])
  const [currentIngredience, setCurrentIngredience] = useState('')
  const [recipe, setRecipe] = useState([])
    
  const APP_ID = '242ba107'
  const APP_KEY = 'f1235af9ebb7ade8278a6b1cb0454c61'
    
    
  const getRecipeByIngredience = async () => {
    const api = await fetch (
        `https://api.edamam.com/search?q=${ingrediences}&app_id=${APP_ID}&app_key=${APP_KEY}`        )
    const data = await api.json();
    console.log(data)
    setRecipe(data.hits)
  }
  
 function insertCurrentIngrediece(event){
  event.preventDefault()
  setCurrentIngredience(prevState => {
    return [...prevState, event.target.value]
  })
  }
   
  function insertIngrediece(event){
    event.preventDefault()
    setIngrediences(prevState => {
      return [...prevState, currentIngredience.slice(-1)]})
      // console.log(ingrediences)
  }
  
  function displayIngrediences(){
    return ingrediences.map(ingredience => {
      return <div>
        <p>{ingredience}</p>
      </div>
    }
    )
  }
  
  function filterIngredinces(){
    if(ingrediences === [/*ADD SOMETHING HERE*/]){
      {getRecipeByIngredience()}
      return <div>riť</div>
    }
  }
  
  // function displayFilteredIngrediences(){
    
  // }
  useEffect(()=>{
    getRecipeByIngredience();
  },[ingrediences])
  return (
    <div>
      <form onSubmit={insertCurrentIngrediece} className={styles["form-wrapper"]}>
        <input onChange={insertCurrentIngrediece} type="text" placeholder="Type your ingrediece one by one..." name="yourIngredience" className={styles["form-input"]}></input>
        <button onClick={insertIngrediece}>Add</button>
      </form>
      <div>
        {ingrediences.length===0 ? <div className={styles["display-none"]}></div> : 
        <div className={styles["ingrediences-wrapper"]}>
        {displayIngrediences()} 
        <button onClick={filterIngredinces}>riť</button>
        </div>}
        
      </div>
    </div>
  )
}

export default Search
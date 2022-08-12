import React, { useState, useEffect } from 'react'
import styles from "./Search.module.css"
import Card from './Card'

function Search() {
  const [ingrediences, setIngrediences] = useState([])
  const [currentIngredience, setCurrentIngredience] = useState([])
  const [recipe, setRecipe] = useState([])
    
  const APP_ID = '242ba107'
  const APP_KEY = 'f1235af9ebb7ade8278a6b1cb0454c61'
  
  

  useEffect(()=>{
    async function getRecipeByIngredience(){
      const api = await fetch (
        `https://api.edamam.com/search?q=${ingrediences}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await api.json();
    setRecipe(data.hits)
    }
    getRecipeByIngredience();
  },[ingrediences])
  
    

 function insertCurrentIngrediece(event){
  event.preventDefault()
  setCurrentIngredience(prevState => {
    return [...prevState, event.target.value]
  })
  }
  
  function insertIngrediece(event){
    event.preventDefault()
    setIngrediences(prevState => {
      return [...prevState, currentIngredience.slice(-1)]
    })
      // console.log(ingrediences)
  }
  function removeCurrentIngrediece(event){
    event.preventDefault()
    setIngrediences(prevState => {
      return prevState.slice(0, -1)
    }
    )
  }
  
  function displayIngrediences(){
    console.log(ingrediences)
    console.log(recipe)
    console.log(currentIngredience)
  
    
    return ingrediences.map(ingredience => {
      return <div className={styles["input-of-ingredience"]} id="ingrediences">  
        <p key={ingredience}>{ingredience}</p>
      </div>
    }) 
  }
  
  function displayAllIngrediences(){
    console.log("cicky")
  }
  
  function deleteAllIngrediences(){
    setIngrediences([""])
    setCurrentIngredience([])
  }

  return (
    <div className={styles["body"]}>
      <form onSubmit={insertCurrentIngrediece} className={styles["form-wrapper"]}>
        <input onChange={insertCurrentIngrediece} type="text" placeholder="Type your ingrediece one by one..." name="yourIngredience" className={styles["form-input"]}></input>
        <button onClick={insertIngrediece} className={styles["form-button"]}>Add ingredience</button>
        {recipe.length===0 ? <div className={styles["display-none"]}></div> : <button onClick={deleteAllIngrediences} className={styles["form-button"]}>Remove ingredience</button> }
      </form>
      <section>
        {ingrediences.length===0 ? <div className={styles["display-none"]}></div> : 
        
        <div className={styles["ingrediences-wrapper"]}>
          {displayIngrediences()} 
        <button onClick={removeCurrentIngrediece} className={styles["remove-ingredience-button"]}>Remove ingredience</button>
        </div>}
        {recipe.length===0 ? <div className={styles["display-none"]}></div> :
        <div className={styles["recipes-container"]}>
        {recipe.map(meal => {
          return <div>
          <Card 
              key = {meal.recipe.label}
              title={meal.recipe.label}
              image={meal.recipe.image}
              cousine={meal.recipe.cuisineType}
              mealType={meal.recipe.mealType}
              link={meal.recipe.url}
              listOfIngrediences={meal.recipe.ingredientLines.length > 8 ? <button onClick={displayAllIngrediences()}>Kokotko</button> : <p className={styles["ingr"]}>{meal.recipe.ingredientLines.map(ingr => {
                return <p>{ingr}</p>
              })}</p>}
              />
          </div>
        })} 
        </div>}
      </section>
    </div>
  )
        }

export default Search
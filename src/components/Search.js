import React, { useState } from 'react'


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
      return <li>{ingredience}</li>
    }
    )
  }
 
  return (
    <div>
      <form onSubmit={insertCurrentIngrediece}>
        <input onChange={insertCurrentIngrediece} type="text" placeholder="Select your ingrediece" name="yourIngredience"></input>
        <button onClick={insertIngrediece}>Add</button>
      </form>
     {/* <button onClick={insertIngrediece}>insert ingredience</button> */}
    {displayIngrediences()}
    
    </div>
  )
}

export default Search
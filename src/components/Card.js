// import React, { useEffect, useState } from 'react'


// function Card() {
   
//     const [recipe, setRecipe] = useState([])
    
    
    
//     useEffect(()=>{
//         getRecipe();
//     },[])

//     const getRecipe = async () => {
//         const api = await fetch (
//             'https://api.spoonacular.com/recipes/random?apiKey=ce736bea9bb94da99b8b545a645b961a&number=2'
//         )
//         const data = await api.json();
//         console.log(data)
        
//     setRecipe(data.recipes)
//   }

//   return (
//     <div>
    
//     {recipe.map((recipe) =>{

//         return(
//             <div key={recipe.id}>
//                 <p>{recipe.title}</p>
//                 <p>{recipe.description}</p>
//                 <img src={recipe.image} alt="images of recipes"></img>
//             </div>
//         )
//     })}
//     </div>
    
//   )
// }

// export default Card
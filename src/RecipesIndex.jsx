/* eslint-disable react/prop-types */
export function RecipesIndex(props){

  return(
    <div>
      <h1>All Recipes</h1>
      {props.recipes.map((recipe)=>(
        <div key={recipe.id}>
          <h2>Id:{recipe.id}</h2>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} />
          <p>Description: {recipe.description}</p>
          <p>Ingredients:{recipe.ingredients}</p>
          <p>Time:{recipe.time}</p>
          <p>Creator:{recipe.user_id}</p>
          <p>Servings:{recipe.servings}</p>
          <button onClick={()=>props.displayRecipe(recipe)}> More Info </button>
        </div>
      ))}
    </div>
  )
}

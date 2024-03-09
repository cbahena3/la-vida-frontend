/* eslint-disable react/prop-types */
export function Recipes(props){
  // const recipes = [{id:1, name: "mac and cheese", time: "1 hour"},{id:2, name: "Potatoes", time: "2 hour"}];
  return(
    <div>
      <h1>All Recipes</h1>
      {props.recipes.map((recipe)=>(
        <div key={recipe.id}>
          <h2>Id:{recipe.id}</h2>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt="photo of baked mac and cheese" />
          <p>Description: {recipe.description}</p>
          <p>Ingredients:{recipe.ingredients}</p>
          <p>Time:{recipe.time}</p>
          <p>Creator:{recipe.user_id}</p>
          <p>Servings:{recipe.servings}</p>
        </div>
      ))}
    </div>
  )
}

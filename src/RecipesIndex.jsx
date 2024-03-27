/* eslint-disable react/prop-types */
export function RecipesIndex(props){

  return(
    <div>
      <h1>All Recipes</h1>
      {props.recipes.map((recipe)=>(
        <div key={recipe.id} className="card">
          {/* <h2>Id:{recipe.id}</h2> */}
          <img src={recipe.image} className="card-img-top" style={{width: '18rem'}}/>
          <div className="card-body">
              <h5 className="card-title">{recipe.name} — {recipe.time} </h5>
              <p className="card-text">{recipe.description}</p>
              <p className="card-text">Chef: {recipe.user_id}</p>
              <button onClick={()=>props.displayRecipe(recipe)} className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" > More Info </button>
          </div>
          {/* <h2>{recipe.name}</h2> */}
          {/* <p>Description: {recipe.description}</p> */}
          {/* <p>Ingredients:{recipe.ingredients}</p>
          <p>Instructions:{recipe.instructions}</p> */}
          {/* <p>Time:{recipe.time}</p> */}
          {/* <p>Chef:{recipe.user_id}</p> */}
          {/* <p>Servings:{recipe.servings}</p> */}
          {/* <button onClick={()=>props.displayRecipe(recipe)}> More Info </button> */}
        </div>
      ))}
    </div>
  )
}

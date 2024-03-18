import { Link } from "react-router-dom";

export function Header(){
  return(
    <div>
      <nav>
      <Link to = "/">La Vida</Link> | <Link to = "/">Home</Link> | <Link to = "/recipes">Recipes</Link> | <Link to = "/create-recipe">Create Recipe</Link> | <Link to = "/login">Login</Link> | <Link to = "/signup">Sign Up</Link> | <a href="/logout">Logout</a>
      </nav>
    </div>
  )
}
import axios from "axios"
import { useState } from "react"

export function SignUp(){
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    // eslint-disable-next-line no-unused-vars
    axios.post("http://localhost:3000/users.json", params).then((response) => {
      event.target.reset();
      window.location.href = "/";
    }).catch((error) => {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    })
  };


  return(
    <div>
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation: </label>
          <input name="password_confirmation" type="password" />
        </div>
        <div>
          <label htmlFor="image">Profile Photo: </label>
          <input name="image" type="file" />
        </div>
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  )
}
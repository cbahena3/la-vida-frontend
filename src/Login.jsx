import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if(jwt){
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
export function Login(){
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/sessions.json", params).then((response) => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
      localStorage.setItem("jwt", response.data.jwt);
      event.target.reset();
      window.location.href = "/";
    // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
      setErrors(["Invalid email or password"]);
    });
  }
  return(
    <div>
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
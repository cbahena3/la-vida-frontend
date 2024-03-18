import axios from "axios";

export function Logout(){
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }
  return(
    <div>
      <button onClick={handleSubmit} type="submit">Logout</button>
    </div>
  )
}
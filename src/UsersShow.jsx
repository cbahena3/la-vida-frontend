import { useEffect, useState } from "react";
import { Image } from 'antd';
import axios from "axios";

export function UsersShow() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/users/:id.json")
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <div>
            Profile Photo:
            <Image
            width={200}
            src={user.image} />
          </div>
    
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <div>No user data found.</div>
      )}
    </div>
  );
}

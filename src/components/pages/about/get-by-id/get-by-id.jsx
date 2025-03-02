import React from "react";
import { useParams } from "react-router-dom";

const GetById = () => {
  const { id } = useParams();
  const user = [
    {
      id: "1",
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
    },
    {
      id: "2",
      name: "Jane Smith",
      age: 28,
      email: "jane.smith@example.com",
      phone: "(987) 654-3210",
    },
    {
      id: "100",
      name: "Alice Johnson",
      age: 35,
      email: "alice.johnson@example.com",
      phone: "(456) 789-0123",
    },
  ];
  
  

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
      {
        <div>
          <p>Name: {user.find((u) => u.id === id).name}</p>
          <p>Age: {user.find((u) => u.id === id).age}</p>
          <p>Email: {user.find((u) => u.id === id).email}</p>
          <p>Phone: {user.find((u) => u.id === id).phone}</p>
        </div>
      }
    </div>
  );
};

export default GetById;

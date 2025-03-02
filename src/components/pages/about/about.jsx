import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
      id: "3",
      name: "Alice Johnson",
      age: 35,
      email: "alice.johnson@example.com",
      phone: "(456) 789-0123",
    },
  ];

  return (
    <div>
      hello
      {user.map((el) => {
        return (
          <div key={el.id}>
            <h2>Name: {el.name}</h2>
            <p>Age: {el.age}</p>
            <p>Email: {el.email}</p>
            <p>Phone: {el.phone}</p>
            <Link to={"/about/" + el.id}>
              <button>show</button>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default About;

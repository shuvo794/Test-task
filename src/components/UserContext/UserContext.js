import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Hafiz", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Shuvo", position: "Front End Dev", salary: 26000 },
    { id: 3, name: "Hasnatul", position: "Full Stack Dev", salary: 27000 },
    
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};

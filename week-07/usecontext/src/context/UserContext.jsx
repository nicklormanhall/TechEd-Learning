import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ username: "bob" }}>
      {children}
    </UserContext.Provider>
  );
}

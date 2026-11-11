import { createContext, useState } from "react";

export const Authcontext = createContext();
export default function Authprovider({ children }) {
  const [Users, setUsers] = useState(null);

  return (
    <Authcontext.Provider value={{ Users, setUsers }}>
      {children}
    </Authcontext.Provider>
  );
}

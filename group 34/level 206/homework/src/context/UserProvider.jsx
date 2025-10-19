import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const [user, setUser] = useState({name: "Temuri", age: 20});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null); //null= signed out otherwise { name }

    function signIn(name){
        setUser({ name });
    }
    function signOut(){
        setUser(null);
    }

    const value = { user, signIn, signOut};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used inside an AuthProvider");
    }
    return context;
}
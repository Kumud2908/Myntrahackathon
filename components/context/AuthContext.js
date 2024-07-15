import { createContext,useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE={
    user:{
        _id: "6694e69f40b5ec671b866308",
        username: "user",
        email: "user@gmial.com",
        password: "$2b$10$9/BNf1KlrUsJIiaBPwm/l.7ngmq1osX33c32SUtTIOQzP7tlqGzFu",
        profilePicture: "",
        coverPicture: "images/usercover.jpg",
        followers: [],
        followings: [],
        isAdmin: false,
        createdAt: "2024-07-11T14:21:43.270Z",
        updatedAt: "2024-07-11T14:21:43.270Z",
        "__v": 0
    },

    
    isFetching:false,
    error:false
};

export const AuthContex=createContext(INITIAL_STATE);
export const AuthContexProvider=({children})=>{
    const[state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContex.Provider
         value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
            }}
        >
            {children}

        </AuthContex.Provider>
    )
}
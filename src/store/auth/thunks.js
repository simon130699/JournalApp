import { registerUserWithEmailPassword, singIngWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login, logout } from "./authSlice"

export const chekingAuthentication = (email,password)=>{
    return async (dispatch) => {
            dispatch(chekingCredentials());
            
    }
}

export const startGoogleSignIn = (email,password)=>{
    return async (dispatch) => {
            dispatch(chekingCredentials());
            const result = await singIngWithGoogle()
            if(!result.ok) return dispatch(logout(result.errorMessage));
            dispatch(login( result ))
     }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) => {
    return async(dispatch)=>{
        dispatch(chekingCredentials());
        const resp = await registerUserWithEmailPassword({email,password,displayName});
        console.log(resp)
    }
}

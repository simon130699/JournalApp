import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singIngWithGoogle } from "../../firebase/providers";
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
        const {ok, uid, photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({uid, displayName, email, photoURL,errorMessage}))
    }
}

export const startLoginWithEmailAndPassword= ({email,password,displayName}) =>{
    return async(dispatch)=>{
        dispatch(chekingCredentials());
        const {ok, uid, photoURL,errorMessage} = await loginWithEmailPassword({email,password,displayName});
        if(!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({uid, displayName, email, photoURL,errorMessage}))
    }
}

export const startLogout = () =>{
    return async(dispatch)=>{
        await logoutFirebase();
        dispatch(logout())
    }
}


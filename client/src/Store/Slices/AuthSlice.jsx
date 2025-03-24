import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    username:'',
    email:'',
    isAdmin:false,
    profileImg:null,
    token:'',
}

const AuthSlice = createSlice({
    initialState,
    name:'auth',
    reducers:{
        login(state,action){
            state.username= action.payload.name,
            state.email = action.payload.email,
            state.isAdmin = action.payload.isAdmin || false,
            state.profileImg = action.payload.picture,
            state.token = action.payload.token
        },
        logout(state){
            state.username= '',
            state.email = '',
            state.isAdmin = false,
            state.profileImg = null,
            state.token = ''
        }
    }
})

export const {login, logout} = AuthSlice.actions
export default AuthSlice.reducer
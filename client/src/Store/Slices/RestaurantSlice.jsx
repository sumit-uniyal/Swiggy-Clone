import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {app_url} from '../../Constant'
import axios from 'axios'

const initialState = {
    mData:[],
    status:'idle',
    error:null
}

export const fetchResData = createAsyncThunk('restaurant/data', async()=>{
    try {
        const URL = app_url+ 'restaurant/get-all'
        const movieData = await axios.get(URL)
        return movieData.data
    } catch (error) {
        console.log('error founf while fetcing data from backend '+error)
    }
})


const resData = createSlice({
    name:'restaurant',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
                .addCase(fetchResData.pending, (state)=>{
                    state.status = 'loading'
                })
                .addCase(fetchResData.fulfilled, (state,action)=>{
                    state.status = 'succeeded',
                    state.mData = action.payload
                })
                .addCase(fetchResData.rejected, (state) => {
                            state.status = "failed";
                            state.error = 'something went wrong';
                });

    }
})

export default resData.reducer
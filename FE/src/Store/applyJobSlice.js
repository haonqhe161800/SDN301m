import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const delay = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
}

export const getAllAppliedJobs = createAsyncThunk('api/apply-job/get-all-applied-jobs', async (rejectWithValue) => {

    try {

        await delay();

        const res = await axios.get(`http://localhost:9999/api/apply-job/get-all-applied-jobs`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        // console.log('line 30:', res.data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const initialState = {
    companyArr: [],
    companyDetail: {},
    companyArrFollow: [],
    status: 'idle',
    statusGetOne: 'idle',
    statusFC: 'idle',
    statusUFC: 'idle',
    statusCAF: 'idle'
}


const applyJobSlice = createSlice({
    name: 'applyJob',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllAppliedJobs.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getAllAppliedJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.companyArr = action.payload.data;
            })
            .addCase(getAllAppliedJobs.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export default applyJobSlice.reducer;
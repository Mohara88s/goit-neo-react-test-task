import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/campers');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchCamper = createAsyncThunk(
    'campers/fetchCamper',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

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

export const bookCamper = createAsyncThunk(
    'campers/bookCamper',
    async ({ camperId, newBookingData }, thunkAPI) => {
        try {
            // Маю відправити запит на зразок
            // const response = await axios.post(`/campers/book/${camperId}`, newBookingData);
            // Але повертаю заглушку з затримкою часу
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (!newBookingData.comment) {
                throw new Error("You cannot book without a comment, because it's a stub!");
            }
            const response = { data: { orderId: "00001", orderData: { camperId, newBookingData } } }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
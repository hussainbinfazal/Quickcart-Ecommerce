import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosInstance } from '../../lib/axios';
import { toast } from 'react-toastify';

const initialState = {
    order: null,
    isShown: false,
    isShown: false
};

export const createOrder = createAsyncThunk(
    'user/register',
    async (orderData, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosInstance.post(
                '/users/register',
                orderData,
                config
            );

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || 'Registration failed'
            );
        }
    }
);
export const deleteOrder = createAsyncThunk('order/deleteOrder', async (orderId) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        };
        const response = await axiosInstance.delete(`/orders/${orderId}`, config);
        toast.success('Order deleted successfully!');
        return response.data;
    } catch (error) {
        throw error;
    }
});
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        resetDeleteFlag: (state) => {
            state.isDeleted = false;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
            state.isShown = true;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { clearError, resetDeleteFlag } = orderSlice.actions;
export default orderSlice.reducer;

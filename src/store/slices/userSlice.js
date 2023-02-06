import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    users: [],
    loading: false,
    error: false,
    user: {},
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.user = action.payload;
        },
    },
});

const userReducer = userSlice.reducer;
export const { addUser } = userSlice.actions;
export default userReducer;

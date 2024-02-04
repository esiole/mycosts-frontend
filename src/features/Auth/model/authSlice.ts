import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthUserState {
    email: string | null;
}

const initialState: IAuthUserState = {
    email: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<IAuthUserState>) => {
            state.email = action.payload.email;
        },
        unAuth: (state) => {
            state.email = null;
        },
    },
});

export const { auth, unAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserState {
    id: string | null;
    name: string | null;
    email: string | null;
    img: string | null;
    token: string | null;
}

const initialState: IUserState = {
    id: null,
    name: null,
    email: null,
    img: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.img = action.payload.img;
            state.token = action.payload.token;
        },
        removeUser: () => initialState,
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

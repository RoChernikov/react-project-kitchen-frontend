//import { createSlice } from '@reduxjs/toolkit';

//export чтобы ts не ругался
export const initialState = {
    appName: 'Practicum Project Kitchen',
    token: null,
    viewChangeCounter: 0
};
/*
//вроде должно быть как-то так
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        // исключительно для начала работы (без умных мыслей и типов:D)
        APP_LOAD: (state: any, action: any) => {
            state.token = action.token || null;
            state.appLoaded = true;
            state.currentUser = action.payload ? action.payload.res.user : null;
        },
        LOGOUT: (state: any) => {
            state.token = null;
            state.currentUser = null;
        },
        // и т.п.
    },
});

export default commonSlice.reducer;
export const { APP_LOAD, LOGOUT } = commonSlice.actions;
*/
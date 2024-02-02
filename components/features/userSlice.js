import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        id: 1
    }]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        data: [],
        isModalVisible: false
    },
    reducers: {
        setModalData(state, action){
            state.data = action.payload;
        },
        setIsModalVisible(state, action){
            state.isModalVisible = action.payload;
        }
    }
});

export const { setModalData, setIsModalVisible} = modalSlice.actions;
export default modalSlice.reducer;


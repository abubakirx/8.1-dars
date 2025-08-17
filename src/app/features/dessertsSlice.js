import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    desserts:[],
    totalPrice: 0,
    totalAmount: 0,
}

const dessertsSlice = createSlice({
    name: "desserts",
    initialState,
    redusers: {
        addDessert: (state, {payload}) => {
            dessertsSlice.caseRedusers.calculateTotal()
        },
         removeDessert:(state, {payload}) => {
            dessertsSlice.caseRedusers.calculateTotal()
        },
         clearDessert:(state, {payload}) => {
            dessertsSlice.caseRedusers.calculateTotal()
        },
        calculateTotal: ( state) => {},
    },
});

export const {addDessert , removeDessert, clearDessert, } = dessertsSlice.actions;
export default dessertsSlice.reducer;
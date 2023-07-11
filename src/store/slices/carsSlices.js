import {createSlice} from "@reduxjs/toolkit"

const carsSlice=createSlice({
    name:'cars',
    initialState:{
        searchTerm: '',
        cars: []
    },
    reducers:{
        changeTerm(state,action){
            state.searchTerm=action.payload;
        },
        addCars(state,action){
            state.cars.push({name:action.payload.name,
            cost: action.payload.cost});
        },
        deleteCar(state,action){
            const index= state.cars.indexOf(action.payload);
            state.cars.splice(index,1);
        }
    }
});

export const { changeTerm, addCar, deleteCar} = carsSlice.actions;
export const carsReducers= carsSlice.reducer;
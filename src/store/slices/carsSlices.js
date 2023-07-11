import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        deleteCar(state, action) {
            const updated = state.cars.filter((car) => {
                return arguments.id !== action.payload.id;
            })
            state.cars = updated;
        }
    }
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, deleteCar } from "./slices/carsSlices";
import { formReducer, changeCost, changeName } from "./slices/formSlices";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
});

export { addCar, deleteCar, changeCost, changeName, store };

console.log(store.getState())
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {

    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    })
    
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));

    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name: name, cost: cost }));
    }

    return (<div className="">
        <h4>Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="">
                    <label htmlFor="" className="label">Name</label>
                    <input type="text" value={name} onChange={handleNameChange} className="" />
                </div>
                <div className="">
                    <label htmlFor="" className="label">Cost</label>
                    <input type="number" value={cost || ""} onChange={handleCostChange} className="" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>)
}

export default CarForm;
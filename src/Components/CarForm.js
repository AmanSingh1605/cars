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

    return (<div className="my-4 shadow-xl mx-2 p-4 bg-white rounded">
        <h4 className="text-2xl m-2 font-semibold">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="flex justify-around gap-4">
                <div className="flex items-center">
                    <label htmlFor="" className="label font-semibold  pe-2">Name :</label>
                    <input type="text" value={name} required onChange={handleNameChange} className="border-2 rounded px-2 max-w-[150px]" />
                </div>
                <div className="flex items-center ">
                    <label htmlFor="" className="label font-semibold  pe-2">Cost :</label>
                    <input type="number" value={cost || ""} required onChange={handleCostChange} className="border-2 rounded px-2 max-w-[150px]" />
                </div>
                <div>
                    <button type="submit" className="border-2 rounded-xl active:shadow-md active:bg-slate-100 px-2">Submit</button>
                </div>
            </div>
        </form>
    </div>)
}

export default CarForm;
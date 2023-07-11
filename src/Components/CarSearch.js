import {useDispatch,useSelector} from "react-redux"
import { changeTerm } from "../store";
function CarSearch() {


    const dispatch=useDispatch();
    const searchTerm= useSelector((state)=>{
        return state.cars.searchTerm;
    });

    const handleChange=(event)=>{
        dispatch(changeTerm(event.target.value))
    }

    return (<div className="px-4">
    <hr/>
        <div className="flex items-center my-4">
            <label htmlFor="" className="font-semibold text-lg px-2">Car Search</label>
            <input value={searchTerm} onChange={handleChange} className="border-2 px-2"></input>
        </div> 
    </div>)
}

export default CarSearch;
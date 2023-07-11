import { useSelector, useDispatch} from "react-redux";
import { deleteCar } from "../store";

function CarList() {

    const dispatch=useDispatch();

    const carsList = useSelector(({cars:{cars,searchTerm}}) => {
        return cars.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    })

    const handleDelete=(id)=>{
        dispatch(deleteCar(id))
    }

    const renderCars = carsList.map((car) => {
        return (
            <div key={car.id} className="p-2 ps-4 m-2  bg-red-100 flex justify-between items-center">
                <div>
                    <div className="text-lg font-semibold">{car.name}</div>
                    <div >${car.cost}</div>
                </div>
                <div>
                    <button className="bg-red-500 px-2 py-1 text-white rounded-md" onClick={()=>handleDelete(car.id)}>x</button>
                </div>
            </div>

        )
    })

    return (<div>
        {renderCars}
    </div>)
}

export default CarList;
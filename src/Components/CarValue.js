import { useSelector } from "react-redux";

function CarValue() {

    const totalCost = useSelector(({cars:{cars,searchTerm}})=>{
       const updated =  cars.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        let cost=0;
       for(let car of updated){
            cost+=car.cost;
       }
       return cost;
    })

    

    return (<div className="shadow-xl mx-2 p-2 rounded-b bg-white">
        <hr />
        <div className="m-2 flex justify-end">
                Total Cost: ${totalCost}
            </div> 
    </div>)
}

export default CarValue;
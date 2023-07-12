import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarSearch from "./Components/CarSearch";
import CarValue from "./Components/CarValue";


function App() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="max-w-screen-md h-fit">
        <h1 className="text-4xl flex justify-center my-2 p-2 font-bold">Car List</h1>
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import ListStu from "./comp/Studendlist";
import FavStu from "./comp/Favstudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameContextProvider from "./comp/Namecontextprovider";

function App() {

  return (

    <>

      <div>
        <BrowserRouter>
          <NameContextProvider>
            <div className="bg-red-400 p-10 flex gap-4 ">

              <Link to={"/"} className="underline">  List of Students</Link>
              <Link to={"/fav"} className="underline">Favourite Students</Link>

            </div>
            <Routes>
              <Route path={"/"} element={<ListStu></ListStu>}></Route>
              <Route path={"/fav"} element={<FavStu  ></FavStu>}></Route>
            </Routes>
          </NameContextProvider>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
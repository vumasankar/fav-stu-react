
import { useContext } from "react"
import { NameContext } from "./Namecontextprovider"


const FavStu = () => {
    const { favStu, setFavStu } = useContext(NameContext)

    function removbtn(removeid) {
        var temparr = favStu.filter(function (items, index) {
            if (items.id === removeid) {
                return false
            }
            else {
                return true
            }
        })

        setFavStu(temparr)
    }

    return (

        <div>
            {favStu.length === 0 ? <p>You don't have any favourite students</p> : <p> Your favourite students</p>}

            {favStu.map((item, index) => (
                <div className=" flex gap-9 p-6">
                    {index + 1}. {item.name}
                    <button className="text-red-600" onClick={() => { removbtn(item.id) }}>   Remove</button></div>
            ))}
        </div>
    );
};


export default FavStu
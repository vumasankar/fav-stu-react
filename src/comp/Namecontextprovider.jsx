import { createContext } from "react";

import { useState } from "react";

const NameContext = createContext()


function NameContextProvider(data) {
    console.log(data)
    const [listStu, setlistStu] = useState([{ id: 1, name: "Vishvaja" }, { id: 2, name: "Arunasalam" }, { id: 3, name: "Ashweeka" }, { id: 4, name: "sana" }, { id: 5, name: "Uma" }])

    const [favStu, setFavStu] = useState([]);


    const addfav = (clickid) => {

        const favarr = listStu.find((items) => items.id === clickid);

        if (favarr) {

            setFavStu([...favStu, favarr]);
        }

    }

    return (
        <>
            <NameContext.Provider value={{ listStu, setlistStu, addfav, favStu, setFavStu }}>
                {data.children}
            </NameContext.Provider>
        </>
    )

}

export default NameContextProvider
export { NameContext }
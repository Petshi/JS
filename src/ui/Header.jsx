import React, {useState} from "react";
import { act } from "react-dom/test-utils";
import ModalSearch from "./ModalSearch";
import { Search } from "./Search";

export const Header = () => {

  const [modalWindow, setModalWindow] = useState(false);

  if (modalWindow) return <ModalSearch/>
    return (
        <div  className="d-flex border border-primary rounded">
        {/* Search Act */}
        <div> 
            <div className="text-center p-3">Поиск акта:
              <Search name="searchByNumber" holder="По номеру" url={"work"}/>
              <Search name="searchByName" holder="По имени" url={"work"}/>
              <Search name="searchByPhone" holder="По телефону" url={"work"}/>
            </div>
        </div>
       
        {/* Search Waranty */}
        <div> 
            <div className="text-center p-3">Поиск гарантийного талона:
              <Search name="searchByNumber" holder="По номеру" url={"waranty"}/>
              <Search name="searchByName" holder="По дате" url={"waranty"}/>
              <Search name="searchByPhone" holder="По товару" url={"waranty"}/>
            </div>
        </div>
        </div>
    )
};
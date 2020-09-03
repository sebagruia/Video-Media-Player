import React from "react";
import "./listContainer.css";
import List from "../List/list";
import CustomController from "../CustomController/customController";

const ListContainer  = ()=>{
    return(
        <div className="listContainer">
            <List />
            <CustomController />
        </div>
    );
}

export default ListContainer;


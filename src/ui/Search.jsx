import React,{useState} from "react";
import {Button} from "./Button"

export const Search = (props) => {

    const [idValue, setIdValue] = useState("")

    return (
        <form className="d-flex">
            <div className="m-1">
                <input type="text" className="form-control" name={props.name} placeholder={props.holder} onChange={(event)=> setIdValue(event.target.value)} value={idValue}></input>   
            </div>  
            <Button name={props.name} url={props.url} idValue={idValue}/>
        </form>
    )
};
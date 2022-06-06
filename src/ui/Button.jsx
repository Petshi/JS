import React from "react";
export const Button = (props) => {

    const id = props.idValue
    
    const url = props.url 
    const getData =(url) => {
        fetch(`http://localhost:3004/${url}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(props.idValue)
        })
    }

    const getDocument = (event) => {
        getData(url)
        // setModalWindow(true)
       

            event.preventDefault();
    }

    return (
        <div>
        <button onClick={getDocument} className="btn btn-primary m-1">Поиск</button>
        </div>
    )
}

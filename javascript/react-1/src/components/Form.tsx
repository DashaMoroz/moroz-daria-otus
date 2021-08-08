import React from "react";

const Form = (props: any) => {
    return(
        <>
            <form onSubmit={props.gettingWeather}>
                <div className="input-group mb-3">
                    <input type="text" name="city" className="form-control" placeholder="Город" />
                    <button className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">поиск</button>
                </div>
            </form>
        </>
    )
}

export default Form;
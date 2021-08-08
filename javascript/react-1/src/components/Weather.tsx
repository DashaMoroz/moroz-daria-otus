import React from "react";

const Weather = (props: any) => {
    return(
        <div>
            { props.city &&
            <table className="table">
                <thead>
                <tr className="table-primary">
                    <th colSpan="2" scope="col">
                        Погода в {props.city} на дату
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-light">
                    <td>Местоположение</td>
                    <td>{props.city}, {props.country}</td>
                </tr>
                <tr>
                    <td>Температура</td>
                    <td>{props.temp}°C</td>
                </tr>
                <tr className="table-light">
                    <td>Скорость ветра</td>
                    <td>{props.wind} м/с</td>
                </tr>
                <tr>
                    <td>Давление</td>
                    <td>{props.pressure}hPa</td>
                </tr>
                <tr className="table-light">
                    <td>Заход солнца</td>
                    <td>{props.sunset}</td>
                </tr>
                <tr>
                    <td>Осадки</td>
                    <td>{props.humidity}%</td>
                </tr>
                </tbody>
            </table>
            }
            <div>{props.error}</div>

        </div>
    )
}

export default Weather;
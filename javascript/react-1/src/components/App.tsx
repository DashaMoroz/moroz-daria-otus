import React, {Component} from "react";
import Info from "./Info";
import Form from "./Form";
import Weather from "./Weather";
import Header from "./Header";
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


const API_KEY: string = '08c61484d0fde8620cb918b9bc07453b';

class App extends React.Component{

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        wind: undefined,
        sunset: undefined,
        humidity: undefined,
        error: undefined
    }

    gettingWeather = async (e: any) => {

        e.preventDefault();
        const city: string = e.target.elements.city.value;

        if(city) {
            const  api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await api_url.json();

            let date: Date = new Date();
            date.setTime(data.sys.sunset)
            let sunset: string = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                sunset: sunset,
                humidity: data.main.humidity,
                error: undefined
            })
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                wind: undefined,
                sunset: undefined,
                humidity: undefined,
                error: "Введите название города"
            })
        }

    }

    render() {
        return (
            <>
                <div className="col-xl-12">
                    <Header />
                </div>
                <div className="wrapper">

                    <div className="main">

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <Info />
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xl-9">
                                    <Form gettingWeather={this.gettingWeather} />

                                    <Weather
                                        temp={this.state.temp}
                                        city={this.state.city}
                                        country={this.state.country}
                                        pressure={this.state.pressure}
                                        sunset={this.state.sunset}
                                        wind={this.state.wind}
                                        humidity={this.state.humidity}
                                        error={this.state.error}
                                    />
                                </div>

                                <div className="col-xl-3">
                                    <div>
                                        <AddTodo city={this.state.city}  />
                                        <br/>
                                        <Footer /> <br/>
                                        <VisibleTodoList />

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}

export default App;
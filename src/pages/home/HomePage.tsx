// import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react";
import { Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';


const HomePage = () => {
    const [weatherData, setWeatherData] = useState<any>(null);

    const apiUrl = import.meta.env.VITE_API_URL
    console.log('apiUrl', apiUrl);
    // test api fetch function
    const fetchWeather = async() => {
        const response = await fetch(`${apiUrl}/weather`);
        //const response = await fetch('https://saftware-api.azurewebsites.net/weather');
        const data = await response.json();
        console.log('data:', data);
        setWeatherData(data);
        return data;
    }
    // access query client
    //const queryClient = useQueryClient();

    // // queries
    // const query = useQuery({ queryKey: ['weather'], queryFn: fetchWeather })
    // console.log('query:', query);
    
    return(
        <div>
            <h1>Saftware.dev, coming soon...</h1>
            <h3>Clayton Safranek</h3>
            <Button
                style={{marginRight: '10px'}}
                variant="primary"
                onClick={() => fetchWeather()}>
                Get Weather Data
            </Button>
            <Button
                variant="dark"
                onClick={() => {
                    console.log()
                    setWeatherData(null)
                }}>
                Clear Data
            </Button>
            {weatherData && weatherData.map((item: any) => {
                return (
                    <div key={item.date}>
                        <p>{item.date}: {item.summary}, {item.temperatureF}F</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage

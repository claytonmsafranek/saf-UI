import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../components/NavBar";

const HomePage = () => {
    const [weatherData, setWeatherData] = useState<any>(null);

    const apiUrl = import.meta.env.VITE_API_URL
    // test api fetch function
    const fetchWeather = async() => {
        const response = await fetch(`${apiUrl}/weather`);
        const data = await response.json();
        console.log('data:', data);
        setWeatherData(data);
        return data;
    }
    
    return(
        <>
          <NavBar />

          <div>
              <Button
                  className="mt-3"
                  style={{marginRight: '10px'}}
                  variant="primary"
                  onClick={() => fetchWeather()}>
                  Get Weather Data
              </Button>
              <Button
                  className="mt-3"
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
        </>
    )
}

export default HomePage

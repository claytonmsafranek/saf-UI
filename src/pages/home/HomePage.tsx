import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import './HomePage.css'
import Canvas from "../../components/Canvas";

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
      <div>
          <NavBar />
          <section id="section1">
            <div className="home-container">
              <div className="center-text">
                <h1>Clayton Safranek</h1>
                <h2>Software Engineer</h2>
                <p>Producing powerful, efficient, and bug free code.</p>
              </div>

              {/* <button className="btn outline-button"> */}
                <img src="../../public/down-arrow-2.png"
                  className="outline-button" 
                  width={100} 
                  height={100} 
                  alt="my image" 
                  onClick={() => {console.log('clicked')}}
                  />
              {/* </button> */}


              {/* <Canvas /> */}

              {/* <div>
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
              </div> */}
            </div>
          </section>
          <section id="section2">

          </section>

        </div>
    )
}

export default HomePage

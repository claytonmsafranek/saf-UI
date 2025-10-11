import NavBar from "../../components/NavBar";
import './HomePage.css'
// import Canvas from "../../components/Canvas";
import arrow from "../../assets/down-arrow-2.png";
import headShot from "../../assets/funny-face.jpg";
import http from "../../apis/AxiosBase";
import ProjectsSection from "./ProjectsSection";

const HomePage = () => {
    const fetchWeather = async() => {
        const response = await http.get('/weather').then((response) => {
            console.log('response:', response);
            return response.data;
        });
        console.log('data:', response);
    }
    
    return(
      <div>
          <NavBar />
          <section id="homeSection">
            <div className="home-container">
              <div className="center-text">
                <img src={headShot}
                  height={300}
                  width={250}
                  className="rounded-circle border border-5 border-dark profile-pic"
                />
                {/* TODO: cool idea, make a little teams-like status bar where I can go in and toggle the status to be funny statuses like "chilling" "eating" "pooping", etc */}
                <h1>Clayton Safranek</h1>
                <h2>Software Engineer</h2>
                <p>Producing powerful, efficient, and bug free code.</p>
              </div>
                <a href="#projectsSection">
                  <img src={arrow}
                    className="outline-button" 
                    width={100} 
                    height={100} 
                    alt="my image" 
                    onClick={() => {
                      console.log('clicked')
                      fetchWeather();
                    }}
                  />
                </a>
              {/* <Canvas /> */}
            </div>
          </section>
          {/* <section id="projectsSection">
            <h1>Projects</h1>
              
          </section> */}
          <ProjectsSection />
					
        </div>
    )
}

export default HomePage

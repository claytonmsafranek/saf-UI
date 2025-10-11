// import { Link } from 'react-router-dom'
import './NavBar.css'

import { Link, Element } from 'react-scroll';


const NavBar = () => {

    return (
        <div className="navbar-container">
            <Link to="homeSection" className='pe-3 format-link'><h2 className='ps-2'>Saftware.dev</h2></Link>
            <div>
              <Link to="homeSection" className='pe-3 format-link'>About</Link>
              <Link to="projectsSection" className='pe-3 format-link'>Projects</Link>
              <Link to={'/#'} className='pe-3 format-link'>Contact</Link>
            </div>
        </div>
    )
} 

export default NavBar

import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {

    return (
        <div className="navbar-container">
            <Link to={'/'} className='pe-3 format-link'><h2 className='ps-2'>Saftware.dev</h2></Link>
            <div>
              <Link to={'/#'} className='pe-3 format-link'>About</Link>
              <Link to={'/#'} className='pe-3 format-link'>Projects</Link>
              <Link to={'/#'} className='pe-3 format-link'>Contact</Link>
            </div>
        </div>
    )
} 

export default NavBar

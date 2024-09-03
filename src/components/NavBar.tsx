import { Link } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {

    return (
        <div className="navbar-container">
            <h2 className='ps-2'>Saftware.dev</h2>
            <Link to={'/test'} className='pe-3'>Test</Link>
        </div>
    )
} 

export default NavBar

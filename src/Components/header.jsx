import {NavLink} from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <div className='container'>
            <nav>
                <ul className='container__head'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header
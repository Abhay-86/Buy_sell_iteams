import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Nav =()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/singup')
    }
    return(
        <div>
            <img
            alt='logo' 
            className='logo'
            src='https://media.licdn.com/dms/image/D4D03AQFAsDYkEWoO2w/profile-displayphoto-shrink_800_800/0/1681135837975?e=1695254400&v=beta&t=YqHwY8NsSW9dXFPIIC1PEkuR95z1gPr4cEu2JfPSBG8'/>
            { auth ?
            <ul className='nav-ul nav-right'>
                <li><Link to="/"> Products </Link></li>
                <li><Link to="/add"> Add Products </Link></li>
                <li><Link to="/update"> Update Products </Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;
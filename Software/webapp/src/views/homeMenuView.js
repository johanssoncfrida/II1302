import { NavLink } from 'react-router-dom';

const HomeMenuView = () => {
    return ( 
        <div className= "menuview">
            <p className = "menu-choice"><NavLink to="/">Sign in</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink to="/messages">Messages</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink to="/signup">Sign up</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink to="/about">About</NavLink></p>
        </div>
     );
};
 
export default HomeMenuView;

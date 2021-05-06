import { NavLink } from 'react-router-dom';

const HomeMenuView = () => {
    return ( 
        <div className= "menuview">
            <p className = "menu-choice"><NavLink className = "menu-choice" to="/">Sign in</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink className = "menu-choice" to="/messages">Messages</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink className = "menu-choice" to="/signup">Sign up</NavLink></p>
            <br/>
            <p className = "menu-choice"><NavLink className = "menu-choice" to="/about">About</NavLink></p>
        </div>
     );
};
 
export default HomeMenuView;

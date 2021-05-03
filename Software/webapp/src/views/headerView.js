import { NavLink } from "react-router-dom";

const HeaderView = () => {
    return ( 
        <div className="navbar">
            <h1>Door Display </h1>
            <p id= "officeheader">At Anders office</p>
            <div className="links">
                <p className = "plinks">Home</p>
                <p className = "plinks">
                <NavLink className = "plinks" to="/newmessage">
                Message
                </NavLink></p>
                <p className = "plinks">Contact</p>
            </div>
        </div>
     );
}
 
export default HeaderView;
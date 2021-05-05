import { Link } from "react-router-dom";

const HeaderView = ({ goTo, links, authenticated, firstName }) => {
    return ( 
        <div className="navbar">
            <Link to={goTo}>
                <h1>Door Display </h1>
            </Link> 
            <p id="officeheader">{authenticated ? <span>Office of {firstName}</span> : <span></span>}</p>
            {links}
        </div>
     );
};
 
export default HeaderView;
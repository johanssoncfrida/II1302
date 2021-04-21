import { NavLink } from "react-router-dom";

const CurrentMessageView = ({ currentMessage }) => {
  return (
    <div>

      <h1 className="header center orange-text">
        Current Message
      </h1>
     {console.log("From view " + currentMessage)}
      <h3> {currentMessage} </h3>
      <br />
      <div className="row center">
        <NavLink
          to="/newmessage"
          className="btn btn-large orange hoverable"
        >
          New message
        </NavLink>
      </div>
     
    </div>
  );
};

export default CurrentMessageView;

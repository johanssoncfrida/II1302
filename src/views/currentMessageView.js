import { NavLink } from "react-router-dom";

const CurrentMessageView = ({ currentMessage }) => {
  return (
    <div>
      <div className="row">
        <div className="col l6 offset-l3 valign">
          <h4>Current Message</h4>
          <br />

            <div className="card">
              <div className="card-content">
                <p>{currentMessage}</p>
              </div>
            </div>
            <br />

            <button className="btn">
              <NavLink to="/newmessage" className="white-text">
                <i class="material-icons white-text left">create</i>New message
              </NavLink>
            </button>

        </div>
      </div>
    </div>
  );
};

export default CurrentMessageView;

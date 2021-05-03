import { NavLink } from "react-router-dom";

const CurrentMessageView = ({ currentMessage }) => {
  return (
    <div>

    <div class="row">
        <div class="col l6 offset-l3 valign">
        <h4>Current Message</h4>
          <div class="card">
            <div class="card-content">
              <p>{currentMessage}</p>
            </div>
          </div>
          <NavLink to="/newmessage" className="btn hoverable">New message<i class="material-icons left white-text">create</i></NavLink>
        </div>
      </div>

    </div>
  );
};

export default CurrentMessageView;

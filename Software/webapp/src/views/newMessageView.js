import { NavLink } from "react-router-dom";


const NewMessageView = ({handleChange, handleSubmit}) => {
  return (
    <div id = "newMessage">

      <h1 className="header-message">
        Enter your message
      </h1>
      <br />

      <div >
      <form >
        <div className = "inputarea">
          <input
            className = "inputfield"
            placeholder="Please, type in your message here..."
            type="message"
            maxLength="30"
            onChange={(e) => handleChange(e)}
          />
          
        <button id="newMessageButton" onClick={(e) => handleSubmit(e)}>
          <NavLink id="newMessageButton" to="/currentmessage">
            Submit
          </NavLink>
        </button>
        </div>
      </form>
      <div id="formcheckbox">
        <form  action="#">
          <p>
            <label>
              <input type="checkbox" />
              <span>Save to messages</span>
            </label>
          </p>
        </form>
      </div>
    </div>
  </div>
  );
};

export default NewMessageView;
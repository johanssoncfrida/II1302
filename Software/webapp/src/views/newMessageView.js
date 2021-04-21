import { NavLink } from "react-router-dom";

const NewMessageView = ({handleChange, handleSubmit}) => {
  return (
    <div>

      <h1 className="header center orange-text">
        Create a new message
      </h1>
      <br />

      <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        
          
        <h5 className="grey-text text-darken-3">New Message</h5>

        <div className="input-field">
          <input
            placeholder="Message"
            type="message"
            id="message"
            onChange={(e) => handleChange(e)}
          />
        </div>
        

        <div className="input-field">
          <NavLink
          to="/currentmessage"
          className="btn btn-large orange hoverable"
        >
          Save
        </NavLink>
        </div>
        
        
      </form>
    </div>
     
    </div>
  );
};

export default NewMessageView;
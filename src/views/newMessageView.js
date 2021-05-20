import { NavLink } from "react-router-dom";
import 'materialize-css';
import { Textarea, Icon, Button } from 'react-materialize';


const NewMessageView = ({handleChange, handleSubmit}) => {
    return (
        <div id = "newMessage">

        <h4 className="header-message">Create a new message</h4>
        <br />

        <div>
            <form >
                <div className = "inputarea" onChange={(e) => handleChange(e)}>
                    <Textarea data-length={20} maxLength = {20} id="Textarea-12" label="Please enter your message here."/>
                    <br />
                </div>

                <button className="btn" onClick={(e) => handleSubmit(e)}>
                    <NavLink to="/currentmessage" className="white-text">
                        <i class="material-icons white-text left">send</i>Submit
                    </NavLink>
                </button>
            </form>
        </div>
        
        </div>
  );
};



export default NewMessageView;
import { NavLink } from "react-router-dom";

const LoginView = ({handleSubmit, handleChange,handleButton}) => {
    return ( 
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <div className="card-action right-align">
          <button className="btn" onClick = {(e)=> handleButton(e)}>
            X
          </button>
        </div>
        
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            id="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn">Log In</button>
          {/* <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div> */}
        </div>
        <div className="center">Need an account? <NavLink to="/signup" className="red-text text-darken-2">Sign up</NavLink></div>
      </form>
    </div>
  );
};
        
 
export default LoginView;
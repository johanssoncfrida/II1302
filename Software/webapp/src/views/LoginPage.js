const LoginPage = ({handleButton}) => {
    return ( 
        <div className="login" >
            <button className = "buttonlogin" onClick = {(e) => handleButton(e)}>
                Login
            </button>
        </div>
     );
}
 
export default LoginPage;

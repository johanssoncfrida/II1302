//new name

import Header from "./header";
import HomeMenu from "./homeMenu";
import SignIn from "./signIn";

const HomePage = () => {
    return ( 
        <div className="HomePage">
            <div className="childNavbar">
                <Header />
            </div>
            <div className="parentHomePage">
            <div className="childHomePage">
                <SignIn />
            </div>
            <div className="childHomePage">
                <HomeMenu />
            </div>
            </div>
            
        </div>
        
     );
}
 
export default HomePage;

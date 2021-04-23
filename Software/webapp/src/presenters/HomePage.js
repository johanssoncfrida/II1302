import Navbar from "./Navbar";
import HomeMenuPresenter from "./HomeMenu";
import LoginPresenter from "./Login";

const HomePage = () => {
    return ( 
        <div className="HomePage">
            <div className="childNavbar">
                <Navbar />
            </div>
            <div className="parentHomePage">
            <div className="childHomePage">
                <LoginPresenter />
            </div>
            <div className="childHomePage">
                <HomeMenuPresenter />
            </div>
            </div>
            
        </div>
        
     );
}
 
export default HomePage;
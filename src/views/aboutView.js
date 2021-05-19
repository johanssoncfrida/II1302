import video from '../About.mp4';

const AboutView = () => {
    return (
        <div>
            <h3>About Door Display</h3>
            <p className="left-align"> This web application is created as a part of a project
            task in the course II1302 at KTH. The web application is used together with a physical
            display possibly placed outside an office door. By using the Door Display you can inform 
            visitors of your whereabouts or plans for the day as the visitors are able to read the
            message at your display. With the web app you may at any time upload a new message, no 
            matter if you are at the office or at any other place!
            </p>
            <br></br>
            <br></br>
            <p className="left-align">Below a video of the web application's functionality can be seen.</p>
            <video className="responsive-video" controls>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    );
  };
  
  export default AboutView;

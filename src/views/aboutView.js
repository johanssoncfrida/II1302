import video from '../About.mp4';

const AboutView = () => {
    return (
        <div>
            <h3>About Door Display</h3>
            <p className="left-align"> Denna webbapplikation är skapad som en del utav en
            projektuppgift i kursen II1302 på KTH. Webbapplikationen används tillsammans
            med en fysisk display som kan fästas vid dörren till sitt kontor. Med hjälp av 
            Door Display kan alla som besöker ditt kontor se ditt meddelande på din display. Med
            webbapplikationen kan du sedan ändra ditt meddelande, oavsett om du befinner dig på kontoret
            eller någon helt annanstans!
            </p>
            <br></br>
            <br></br>
            <p className="left-align">Nedan ses en video som beskriver hur webbapplikationen fungerar.</p>
            <video className="responsive-video" controls>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    );
  };
  
  export default AboutView;

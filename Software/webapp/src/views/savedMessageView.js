const SavedMessageView = () => {
    return ( 
    <div className="listMessage">
      <ul >
        <h5>Saved messages</h5>
          <li className="listchoice">
            <label htmlFor="msg1" className="container">
              <input type="checkbox" id="msg1" />
                <span >Möte hela dagen</span>
            </label>
          </li>
          <li className="listchoice">
            <label htmlFor="msg2" className="container">
              <input type="checkbox" id="msg2"/>
                <span>Konferens, tillbaka på måndag</span>
              </label>
            </li>
            <li className="listchoice">
              <label htmlFor="msg3" className="container">
                <input type="checkbox" id="msg3"/>
                  <span className="listchoice">Möte kl 15:00</span>
                </label>
              </li>
            </ul>
          <br/>
          <button className="MessageButton">Update</button>
        </div>
     );
}
 
export default SavedMessageView;
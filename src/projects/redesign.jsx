
export default function Redesign() {
    return (<div style={{ paddingTop: "10vh", backgroundColor: "white" }}>
        <div className="intro" style={{ backgroundImage: "url(src/assets/backgroundChurch.png)" }}>
            <h1>Welcome to Saint Mary's Church, Cranston!</h1>
            <div style={{ paddingLeft: "10vw", paddingBottom: "50px" }}>
                <a>Learn more</a>
            </div>
        </div>
        <div className="mass">
            <h1>Mass Times</h1>
            <div className="holder">
                <div style={{ margin: "0px 40px" }}><h2>Weekend Mass:</h2>

                    <h3>Saturday Vigil: 4:00pm <br></br>
                        Sunday: 8:00, 9:30 and 11:00am</h3></div>
                <div style={{ margin: "0px 40px" }}><h2>Daily Mass:</h2>
                    <h3>Tuesday- Friday 8:00am <br></br>
                        (Lower Church) <br></br>
                        *Rosary after Mass
                    </h3></div>
                <div style={{ margin: "0px 40px" }}><h2>Confessions are on:</h2>
                    <h3>Fridays from 8:30am - 9:15am <br></br>
                        Saturdays from 3:00pm - 3:45pm</h3></div>
            </div>
            <p>We will be offering first Friday Confessions from 7:00am - 7:45am on the First Friday of every month beginning Friday, May 6th. (This new time is being offered on First Fridays in addition to the regular schedule of 8:30-9:15am.)</p>
        </div>
        <div className="events">
            <h1 style={{ fontSize: "250%" }}>Upcoming Events</h1>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100vw" }}>
                <div className="dropdown">
                    <span>Janurary 1st</span>
                    <div className="dropdown-content">
                        <p>Mass 8:00am</p>
                        <p>Mass 9:30am</p>
                        <p>Mass 11:00am</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Janurary 3rd</span>
                    <div className="dropdown-content">
                        <p>Mass 8:00am</p>
                        <p>Pastor Meet and Greet 11:00am</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Janurary 4th</span>
                    <div className="dropdown-content">
                        <p>Mass 8:00am</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Janurary 5th</span>
                    <div className="dropdown-content">
                        <p>Mass 8:00am</p>
                        <p>Confession 8:30am-9:15am</p>
                        <p>Aniversary Celebration 1:00pm </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="resources">
            <h1 style={{ fontSize: "250%" }}>Resources</h1>
            <div className="holder">
                <a style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(src/assets/reading.jpg)" }}> Daily Reading</a>
                <a style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(src/assets/news.jpg)" }}><div className="overlayRedesign"></div>
                    Catholic News</a>
                <a style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(src/assets/giving.jpg)" }}><div className="overlayRedesign"></div>
                    Online Givings</a>
            </div>
        </div>
        <div className="contact">
            <div className="contact-church">
                <img src="src/assets/st-mary-cropped.jpg" style={{ border: "none", borderRadius: "1vw" }}></img>
            </div>
            <div className="contact-text">
                <h1>Contact</h1>
                <h3>office@saintmarycranston.org <br></br>
                    1525 Cranston St, Cranston, RI, United States<br></br>
                    (401) 942-1492</h3>
                <img src="src/assets/social.png" style={{ border: "none", width: "150px" }}></img>
            </div>
        </div>

    </div >)
}
import React from "react";

export default function Demo2() {
    return (
        <div>
            <div className="content">
                <h2>Interviewing and Recording</h2>
                <h1>Observing Interaction of a Public Interface</h1>
                <p>My first step to this process is finding a public interface that I can observe. Below, I have sketched out my inteface. In particular, I watched a Vending machine used by Brown Students in the Science Library. </p>
                <div style={{ justifyContent: "center" }}>
                    <img style={{
                        objectFit: "contain",
                        display: "block",
                        width: "180vw",
                        height: "130vh"
                    }} src="src/assets/vendor.png" alt="Vending machine sketch"></img>
                    <img style={{
                        objectFit: "contain",
                        display: "block",
                        width: "180vw",
                        height: "130vh"
                    }} src="src/assets/interface.png" alt="Interface annotation"></img>
                </div>
                <p> Some of my main observations are that: <br></br>Many people swiped their Brown ID and continued interacting with the interface, but didn't end up buying anything and walked away. This was more common than people actually buying from the vending machine. <br></br> A few people had to squat down in order to swipe their card in the interface. <br></br> When interacting with the interface, nearly all people inputed the same number into the keyboard 2 or 3 times. <br></br> No one paid with their Brown ID. </p>
                <p> Here are my summarized responses when it came to the questions I asked 3 students who used the vending machine: </p>
                <h3>How would you describe your experience using this particular vending machine?</h3>
                <p>Medicore to frusterating to use.</p>
                <h3>Why do you use this vending machine?</h3>
                <p>Used this vending machine because I want to continue to stay in the Science Library (for convience) and because the other vending machines are out/ don't have what I want.</p>
                <h3>What payment method do you use?</h3>
                <p>Paid with credit card or Apple Pay.</p>
                <h3>In what way does the vending machine interface meet your expectations?</h3>
                <p>After interaction, I received food from the vending machien as standard.</p>
                <h3>Is there any step in the process of using the vending machine interface that is different from your expectations?</h3>
                <p>Although there is a label indicating that it accepts Brown ID cards, after swiping the brown ID, the payment interface tells the user to swipe with a different card, as the current card does not wok. Also, the sensor for Apple Pay works only sometimes.</p>
            </div>
            <div className="content" style={{ backgroundColor: "#fff5e6" }}>
                <h2>Making an empathy map</h2>
                <h1>Creating Personas</h1>
                <p> Using the observations and interviews I collected my goal was to construct 2 personas by creating an empathy map, describing what users think, feel, say, and do, representing part of the spectrum of users I had observed. A good persona is one that someone can act out with confidence in different scenarios. My personas should be based on overarching trends I observed amongst all the users I interviewed from the previous section, while avoiding assumptions.  Below, I have created two personas that represent the people I interveiwed using the vending machine </p>
                <img src="src/assets/Ari_Persona.png" alt="Persona Named Ari, is off the meal plan. Pays with apple pay, feel mediocore about interaction."></img>
                <img src="src/assets/Sarah_persona.png" alt="Persona named Sarah, is on the meal plan, tries to pay wih meal plan with Brown ID, and is frusterated because it does not accept Brown ID."></img>
            </div>
            <div className="content">
                <h2>Mapping Interaction from Beginning to End</h2>
                <h1>Drawing a Storyboard</h1>
                <p>Some qualities of a good storyboard include thinking about presenting authenticity, emotion, and simplicity.
                    I want to storyboard my persona's entire user journey from start to end.
                    I should reflect the goals of my persona and include all the steps for using this interface. Using this storyboard, you should better identify the goals and characteristics of my personas.
                </p>
                <p>Below is my completed Story board of the Persona Sarah, using the Vending Machine.</p>
                <img src="src/assets/storyboard.png" alt="Storyboard of Sarah using the vending machine"></img>
            </div>

        </div>
    )

}
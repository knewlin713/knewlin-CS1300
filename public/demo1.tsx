import DropdownFilter from "../src/Elements/multi-select.js";
import React, { SetStateAction, useState } from "react";

export default function Demo() {
    const [price, setPrice] = useState<Array<string>>([]);
    const options = [
        { value: "inexpensive", label: "$" },
        { value: "moderately inexpensive", label: "$$" },
        { value: "moderately expensive", label: "$$$" },
        { value: "expensive", label: "$$$$" }
    ];


    return (<div style={{ marginLeft: "20vw", marginRight: "20vw" }}>
        <div>
            <div className="content" >
                <h1>Input</h1>
                <h2>The Concept</h2>
                <p>I decided that I wanted to look into the multi-select dropdown tool, as I wanted to use it in a project I had in mind.
                    My first step was to investigate the use of multi-select dropdown tools online.
                    I looked specifically at Google Maps (price dropdown), Bing Shopping (brand dropdown), and Google Calendar (calendar dropdown).
                    Below, I have some images from each application throughout their use stages.
                </p>
                <table>
                    <tr>
                        <th> Use Stages
                        </th>
                        <th>
                            Google Maps
                        </th>
                        <th>
                            Google Calendar
                        </th>
                        <th>
                            Bing Shopping
                        </th>
                    </tr>
                    <tr>
                        <td>closed state</td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.50.40 PM.png" alt="Price drop down of google maps"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.31.35 PM.png" alt="Google calendar dropdown other claendar closed"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 5.38.30 PM.png" alt="Bing shopping Brand dropdown closed"></img></td>
                    </tr>
                    <tr>
                        <td>open state</td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.57.12 PM.png" alt="price dropdown on google maps open, with price options unchecked"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.31.53 PM.png" alt="Other calendar dropdown open, with options of several calendars unchecked"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 5.38.48 PM.png" alt="Brand dropdown open, word show more are at bottom, fiev unchecked optiosn displayed"></img></td>
                    </tr>
                    <tr>
                        <td>options clicked</td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.58.41 PM.png" alt="multiple price options checked"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 1.32.39 PM.png" alt="multiple calendar options checked"></img></td>
                        <td><img src="src/assets/Screenshot 2025-02-11 at 5.39.05 PM.png" alt="multiple brand options checked"></img></td>

                    </tr>

                </table>
                <p>Most multi-select tools are open by default, use up/down arrows, and display selections either in the bar or elsewhere. They often include animations and visual cues like highlighting for clickable checkboxes.</p>
                <p>Google Calendar's dropdowns support full keyboard navigation, while Google Maps offers similar behavior. Bing adds a "show more/less" option but lacks full keyboard support and has minor UI issues.</p>
                <p>All dropdowns share common elements like checkmark boxes and right-side arrows—key features to retain in any custom design.</p>
                <p> Here is a simple table I made in regards to the usabliltiy of each application.</p>
                <table>
                    <tr>
                        <th>
                            Interaction Type
                        </th>
                        <th> Google Maps</th>
                        <th> Google Calendar</th>
                        <th> Google Maps</th>
                    </tr>
                    <tr>
                        <td>mouse</td>
                        <td>works fine, there are some nice features in order to clear and finish out of the dropdown, but there is a lack of animations.</td>
                        <td>works well, the ui is smooth, uses animations, and several indicative highlights to suggest what is being clicked/ selected.</td>
                        <td>works well, the ui could be smoohter, uses animation, but there are no almsot highlights to suggest what is being clicked.</td>
                    </tr>
                    <tr>
                        <td>keyboard</td>
                        <td>difficult to navigate to, need use tab and arrow keys. This is easier done with voice over. Works well otherwise</td>
                        <td>diificult to access dropdown with keyboard. Once at dropdown, navigation through options is simple. Uses arrow keys to traverse options. </td>
                        <td>tab and keybaord makes it evry easy to transverse through options, but only in voice over. The keys otherwise do nothin/ provide scroll only. </td>
                    </tr>
                    <tr>
                        <td>touchpad</td>
                        <td>Some of the buttons are diffult to press, specifcally the "Done" button and the "Clear" button. Otherwise, it works okay.</td>
                        <td>The misclicks do not have much consequences which is nice. There is a way to delete your options in this case, however there is a popup beforehand. The highlighting helps to know where you are clicking. </td>
                        <td>Things here are easily clickable, however due ot tiles not highlighting or geting darker when you are pressing, sometimes you don't know what you are pressing, which can make selection difficult. </td>
                    </tr>

                </table>

            </div>
            <div className="content" >
                <h1>Output</h1>
                <h2>Comparing Interactions</h2>
                <p> An input, whether a keybaord tap or a cursor hover, can cause an output. In this case, An output may be the appearance of new elements, items changing color or shade, emboldened borders or text, or a shift in element focus. Below, I create a comprehensive, in-depth analysis of several inputs and their respective outputs. The table allows the easy comparison of multi-select dropdowns from each application.<br></br> An asterick (*) represents any notations regarding the VoiceOver useage.</p>
                <table>
                    <tr>
                        <th>
                            Input Type
                        </th>
                        <th> Google Maps</th>
                        <th> Google Calendar</th>
                        <th> Google Maps</th>
                    </tr>
                    <tr>
                        <td>Space Pressed</td>
                        <td>First checkbox in the dropdown is checked if dropbox is open. Space also opens the dropbox if closed. Otherwise needs to be pressed in conjunction with arrow keys (sometimes doesn’t work at all)
                            *voice over tells you to use control+option space to open menu</td>
                        <td>Does not do anything in relevance to dropdown, needs to be pressed in conjunction with arrow keys, if used will check mark the other boxes</td>
                        <td>Spacebar scrolls down through the rest of the drop downs</td>
                    </tr>
                    <tr>
                        <td>Enter Pressed</td>
                        <td>Enter button has the same functionality as space button
                        </td>
                        <td>Enter does nothing</td>
                        <td>Opens and closes dropdown if tab is navigated over toe dropdown; otherwise, nothing
                        </td>
                    </tr>
                    <tr>
                        <td>Tab Pressed</td>
                        <td>If dropdown is pressed, tab will make an option gray. If pressed again, it will make the next option gray, unit tab is pressed on the last option, in which it will close out the dropdowns.
                            *works well with voice over when navigating dropdowns and options, reads off options
                        </td>
                        <td>Very difficult to navigate to multi-select dropdowns with tab. If tab is pressed while dropdowns are selected/recently have been pressed, the first option will be come gray (previously white) and a blue circle will surround the checkbox option. If pressing tab again from there, will go through rest of choices for the specific option, creating a blue circle around each. Eventually, tab gets off the dropbox option and then is no longer selecting options from the dropbox
                        </td>
                        <td>A blue line appears above an below a dropdown/ dropdown option, and each time tab is pressed, it proceeds to the next option
                            *tab can be helpful for navigating options but does not tell you you are on a dropdown.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Arrow Keys Pressed
                        </td>
                        <td>
                            If the dropdown is opened, the top and left arrow keys will select options in an upward matter, shown by a blue line above  and below the option as well as the option becoming darker, or greyed. The down and right arrow keys will do the same but in a downwards matter. If it gets to the top or bottom of the dropdown, it will loop around to the top/bottom option.

                            *each open is read through voice over when navigating with arrow keys, though usually causes dropdown options to close and doesn’t work well

                        </td>
                        <td>Can navigate through the options, as shown by  a grayed, or darked options. Left and right arrow keys do nothing.

                            *Voice over reads each option as you navigate through. It also tells you if it is checkmarked or not
                        </td>
                        <td>Scrolls through the dropdowns, left and right arrows do nothing.
                            *In regards to voice over, is very useful for navigating through options and reading all different parts of options
                        </td>
                    </tr>
                    <tr>
                        <td> Number Keys Pressed
                        </td>
                        <td>
                            Nothing Happens
                        </td>
                        <td>Shortcuts related to the calendar itself occur, but not related to the multi-select dropdown. </td>
                        <td>
                            Nothing Happens
                        </td>
                    </tr>
                    <tr>
                        <td> Double-click Option
                        </td>
                        <td>
                            Selects option, then unselects option, as denoted by check mark in square box appearing, and then disappearing

                        </td>
                        <td>Selects option, then unselects option, as denoted by check mark in square box appearing, and then disappearing
                        </td>
                        <td>Selects as normal, a check mark appears inside square box of option and the site reloads.
                        </td>
                    </tr>
                    <tr>
                        <td> Double-click Arrow / Title of Dropdown
                        </td>
                        <td>
                            If dropdown is open: makes the dropdown box flicker, twice. The drop down does not disappear.
                            If the dropdown is closed: makes the dropdown open, then flicker once.
                        </td>
                        <td>If dropdown is closed: makes dropdown open, then close. The arrow flips twice while doing this. If dropdown is open: makes dropdown close, then open. The arrow flips twice while doing this.

                        </td>
                        <td>If dropdown is closed: makes dropdown start to open, then close. The arrow flips twice while doing this. If dropdown is open: makes dropdown start to close, then open. The arrow flips twice while doing this.

                        </td>
                    </tr>


                </table>
            </div>
            <div className="content">
                <h1>State Models & Component Redesign
                </h1>
                <h2>Redsigning Interaction</h2>
                <p>Even though the Bing Shoppping dropdown does have some important issues, I found that Google Maps Price Dorpdown had issues as well. Therefore, I decided that in order to investigate how to make the ideal dropdown, I first had to analyize the flow of interactions, and improve upon a current implementation. The Google Maps multi-select dropdown has some great features, but also some bad features. Below, I made an thorough state model of the Google Maps dropdown, when using both mouse and keyboard. Following those charts, I redesigned the state models in a way that would improve the current dropdown. I made these charts using Figma.  </p>
                <h2 style={{ paddingTop: "100px" }} > Original Flow State: Mouse</h2>
                <img src="src/assets/Flow Chart Template (Copy).png" alt="bad flow chart"></img>
                <h2 style={{ paddingTop: "100px" }} > Original Flow State: Keyboard</h2>
                <img src="src/assets/Flow Chart Template (Copy)-2.png" alt="bad flow chart"></img>
                <h2 style={{ paddingTop: "100px" }} > Redesigned Flow State: Mouse</h2>
                <img src="src/assets/Flow Chart Template (Copy)-3.png" alt="good flow chart"></img>
                <h2 style={{ paddingTop: "100px" }} > Redesigned Flow State: Keyboard</h2>
                <img src="src/assets/Flow Chart Template (Copy) copy.png" alt="good flow chart"></img>
                <p>
                    In redesigning the dropdown, features missing in Google Maps but present in Bing and Google Calendar were addressed, such as making the title clickable to close the dropdown instead of causing a flicker. Keyboard support was improved so pressing space or enter on the title closes it, creating a more intuitive interaction. VoiceOver labels were refined for clarity, ensuring "Done" and "Clear" buttons are correctly announced. Focus remains on the title after opening the dropdown for better orientation, rather than jumping to the first option. A bug where pressing down on "Clear" closed the dropdown was fixed to prevent confusion—users now tab to "Done" to close it. Lastly, adding transitions improves visual flow, making interactions more appealing and easier to follow.
                </p>
                <p>Below, I made an annotated redesign of the Google Maps Dropdown in Figma. This annotated element expresses some of the changes I addressed above. </p>
                <a href="https://www.figma.com/proto/deKKXtx84t2C4axleYbV1d/Accessible-Redesign?node-id=14-281&t=TvcuVb3lvMHX7gKE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A281" style={{ cursor: "pointer", fontSize: "40px", color: "black" }}>Click HERE to USE the prototype in Figma! (Demo is not complete)</a>
                <img src="src/assets/design annotation.jpg" alt="design which makes good sense"></img>
            </div>
            <div className="content" >
                <h1>Reflection</h1>
                <h2>Overview</h2>
                <p>
                    The components observed performed well in usability and accessibility, especially with keyboard navigation and voiceover support. Common patterns like arrows, darkening on hover, and checkmarks were incorporated into the new design. While original components made accessibility efforts, they were sometimes hard to locate on the page or lacked detailed voiceover descriptions. The redesigned component improves this by enhancing button labeling, navigation flow, and ensuring compatibility with both tech-savvy users and those using assistive technologies. Inputs like keyboard-friendly dropdowns and outputs such as voiceover feedback and visual cues make access easier for blind users. Google Maps’ inclusion of a "done" button enhances clarity, while Bing's dropdown lacks proper highlighting and disrupts voiceover flow. Most components are designed with mouse users in mind, often neglecting those with impairments, which negatively impacts their user experience.
                </p>

            </div>
            <div className="content">
                <h1>The Product</h1>
                <h2>My Custom Element</h2>
                <p> I have made a dropdown inspired by my case study. Now, I can use it in my other projects too! There are a few things I still need to change, such as the shading when hovering over sections, but otherwise it is somewhat complete. Try using it below!</p>
                <DropdownFilter
                    title="Price"
                    options={options}
                    selectedValues={price}
                    onChange={setPrice}
                />
            </div>
        </div>
    </div>);
}